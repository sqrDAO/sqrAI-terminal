import axios from "axios";
import { NextRequest, NextResponse } from 'next/server';

const scrapeApiUrl = process.env.NEXT_PUBLIC_SCRAPE_API;

export async function POST(req: NextRequest) {
  try {
    const { scrapeLink } = await req.json();
    const response = await axios.post(`${scrapeApiUrl}/scrape-link`, { link: scrapeLink });
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Error adding scrape link:", error);
    return NextResponse.error();
  }
}