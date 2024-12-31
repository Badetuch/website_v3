import { NextResponse } from 'next/server';
//import dotenv from 'dotenv';

// Load environment variables from .env file
//dotenv.config();

// Parse the ALLOWED_IPS environment variable into an array
const ALLOWED_IPS = process.env.ALLOWED_IPS?.split(',') || [];

console.log('Parsed ALLOWED_IPS:', ALLOWED_IPS);

const monitorStatuses = new Map<number, boolean>(); // Map<MonitorID, IsHealthy>

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip');

  if (!ip || !ALLOWED_IPS.includes(ip as string)) {
    return NextResponse.json(
      { error: 'Unauthorized: IP not allowed' },
      { status: 403 }
    );
  }

  const body = await req.json();
  const { heartbeat, monitor } = body;

  // Log the complete incoming API request
  console.log('Incoming API POST payload:', JSON.stringify(body, null, 2));

  if (heartbeat && monitor) {
    const monitorID = heartbeat.monitorID;
    const status = heartbeat.status; // 0 for down, 1 for up

    // Update the monitor's status
    monitorStatuses.set(monitorID, status === 1);

    console.log(`Monitor ${monitor.name} (${monitorID}) is now ${status === 1 ? 'healthy' : 'unhealthy'}`);
  }

  return NextResponse.json({ message: 'Webhook received successfully!' });
}

export async function GET() {
  // Determine the overall system status
  const isHealthy = Array.from(monitorStatuses.values()).every((status) => status);
  return NextResponse.json({ status: isHealthy ? 'healthy' : 'unhealthy' });
}
