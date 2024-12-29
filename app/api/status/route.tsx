// app/api/status/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
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
