import axios from "axios";
import getConfig from "next/config";
import { NextRequest, NextResponse } from "next/server";

const scrapeApiUrl = getConfig().publicRuntimeConfig.NEXT_PUBLIC_SCRAPE_API;;

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
