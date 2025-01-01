import { NextResponse } from "next/server";
import { TeamSpeak } from "ts3-nodejs-library";

// Define the handler for the GET method
export async function GET() {
  try {
    // Connect to the TeamSpeak server
    const ts3 = await TeamSpeak.connect({
      host: process.env.TEAMSPEAK_HOST || "localhost",
      queryport: Number(process.env.TEAMSPEAK_QUERYPORT) || 10011,
      serverport: Number(process.env.TEAMSPEAK_SERVERPORT) || 9987,
      username: process.env.TEAMSPEAK_USERNAME || "onlineusers",
      password: process.env.TEAMSPEAK_PASSWORD || "loZSD8R2",
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
