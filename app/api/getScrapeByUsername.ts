import axios from "axios";
import { NextApiRequest, NextApiResponse } from 'next';

const scrapeApiUrl = process.env.NEXT_PUBLIC_SCRAPE_API;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { username } = req.query;
      const response = await axios.get(`${scrapeApiUrl}/api/characters/${username}`);
      res.status(200).json(response?.data);
    } catch (error) {
      console.error("Error getting scrape by username:", error);
      res.status(500).json({ error: 'Error getting scrape by username' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
