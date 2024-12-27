import axios from "axios";
import dayjs from "dayjs";
import { NextApiRequest, NextApiResponse } from 'next';

const scrapeApiUrl = process.env.NEXT_PUBLIC_SCRAPE_API;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { username } = req.body;
      const response = await axios.post(`${scrapeApiUrl}/api/characters`, {
        username: username,
        date: dayjs().format("YYYY-MM-DD"),
        is_crawl: true,
      });
      res.status(200).json(response?.data);
    } catch (error) {
      console.error("Error scraping Twitter:", error);
      res.status(500).json({ error: 'Error scraping Twitter' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
