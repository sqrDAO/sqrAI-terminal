import axios from "axios";
import dayjs from "dayjs";
import { NextRequest, NextResponse } from 'next/server';

const scrapeApiUrl = process.env.NEXT_PUBLIC_SCRAPE_API;

export async function POST(req: NextRequest) {
  try {
    const { username } = await req.json();
    const response = await axios.post(`${scrapeApiUrl}/api/characters`, {
      username: username,
      date: dayjs().format("YYYY-MM-DD"),
      is_crawl: true,
    });
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Error scraping Twitter:", error);
    return NextResponse.error();
  }
}
