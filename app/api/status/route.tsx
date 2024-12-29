import { NextResponse } from 'next/server';

const ALLOWED_IPS = ['YOUR_UPTIME_KUMA_SERVER_IP']; // Replace with your Uptime Kuma server's IP

export async function POST(req: Request) {
  // Get the IP address of the sender
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip');

  if (!ALLOWED_IPS.includes(ip as string)) {
    return NextResponse.json(
      { error: 'Unauthorized: IP not allowed' },
      { status: 403 }
    );
  }

  const body = await req.json();
  console.log('Webhook received:', body);

  return NextResponse.json({ message: 'Webhook received successfully!' });
}
