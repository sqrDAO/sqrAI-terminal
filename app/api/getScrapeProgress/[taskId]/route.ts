import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/authOptions";

const scrapeApiUrl = process.env.NEXT_PUBLIC_SCRAPE_API;

export async function GET(req: NextRequest, { params }) {
  const session = await getServerSession(authOptions as any);

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized: Session is not valid" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { taskId } = await params;
    const response = await axios.get(`${scrapeApiUrl}/api/task-progress/${taskId}`);
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Error getting scrape progress:", error);
    return NextResponse.error();
  }
}
