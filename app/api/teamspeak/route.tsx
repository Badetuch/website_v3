import { NextResponse } from "next/server";
import { TeamSpeak } from "ts3-nodejs-library";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define the handler for the GET method
export async function GET() {
  try {
    // Connect to the TeamSpeak server
    const ts3 = await TeamSpeak.connect({
      host: process.env.TEAMSPEAK_HOST,
      queryport: Number(process.env.TEAMSPEAK_QUERYPORT),
      serverport: Number(process.env.TEAMSPEAK_SERVERPORT),
      username: process.env.TEAMSPEAK_USERNAME,
      password: process.env.TEAMSPEAK_PASSWORD,
    });

    // Fetch server information
    const serverInfo = await ts3.serverInfo();

    // Disconnect from the server
    await ts3.quit();

    // Send online user count
    return NextResponse.json({ onlineUsers: serverInfo.virtualserverClientsonline });
  } catch (error) {
    console.error("Error connecting to TeamSpeak server:", error);
    return NextResponse.json({ error: "Failed to fetch data from TeamSpeak server" }, { status: 500 });
  }
}
