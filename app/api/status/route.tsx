import { NextResponse } from 'next/server';

// Store the status of monitors in memory
const monitorStatuses = new Map<number, boolean>(); // Map<MonitorID, IsHealthy>

const ALLOWED_IPS = ['3.127.166.71', '2a05:d014:a7d:8500:84ad:84a9:1b29:91d9'];

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
