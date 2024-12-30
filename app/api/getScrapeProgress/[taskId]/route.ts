import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const scrapeApiUrl = process.env.NEXT_PUBLIC_SCRAPE_API;

export async function GET(req: NextRequest, { params }) {
  try {
    const { taskId } = await params;
    const response = await axios.get(`${scrapeApiUrl}/api/task-progress/${taskId}`);
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Error getting scrape progress:", error);
    return NextResponse.error();
  }
}