import axios from "axios";
import getConfig from "next/config";
import { NextRequest, NextResponse } from "next/server";

const { publicRuntimeConfig } = getConfig();
const scrapeApiUrl = process.env.NEXT_PUBLIC_SCRAPE_API;

export async function GET(req: NextRequest, { params }) {
  try {
    const { username } = await params;
    const response = await axios.get(`${scrapeApiUrl}/api/characters/${username}`);
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Error getting scrape by username:", error);
    return NextResponse.error();
  }
}
