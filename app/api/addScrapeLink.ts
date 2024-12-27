import axios from "axios";
import { NextApiRequest, NextApiResponse } from 'next';

const scrapeApiUrl = process.env.NEXT_PUBLIC_SCRAPE_API;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { scrapeLink } = req.body;
      const response = await axios.post(`${scrapeApiUrl}/scrape-link`, { link: scrapeLink });
      res.status(200).json(response?.data);
    } catch (error) {
      console.error("Error adding scrape link:", error);
      res.status(500).json({ error: 'Error adding scrape link' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
