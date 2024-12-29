// app/api/status/route.ts
import { NextResponse } from 'next/server';

const ALLOWED_IPS = ['3.127.166.71', '2a05:d014:a7d:8500:84ad:84a9:1b29:91d9']; // Replace with your Uptime Kuma server's IP

export async function POST(req: Request) {
  // Get the IP address of the sender
  const ip =
    req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip');

  if (!ip || !ALLOWED_IPS.includes(ip as string)) {
    console.error(`Unauthorized access attempt from IP: ${ip}`);
    return NextResponse.json(
      { error: 'Unauthorized: IP not allowed' },
      { status: 403 }
    );
  }

  const body = await req.json();

  // Extract data from the incoming webhook
  const { msg, status, name } = body;

  console.log('Webhook received:', body);
  console.log(`Webhook received: ${msg}, ${status}, ${name}`);

  // Respond to Uptime Kuma
  return NextResponse.json({ message: 'Webhook received successfully!' });
}

export async function GET() {
  // Optional: Handle GET requests for testing purposes
  return NextResponse.json({ message: 'Status endpoint is live!' });
}
