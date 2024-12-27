import axios from "axios";
import { NextApiRequest, NextApiResponse } from 'next';

const scrapeApiUrl = process.env.NEXT_PUBLIC_SCRAPE_API;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { taskId } = req.query;
      const response = await axios.get(`${scrapeApiUrl}/api/task-progress/${taskId}`);
      res.status(200).json(response?.data);
    } catch (error) {
      console.error("Error getting scrape progress:", error);
      res.status(500).json({ error: 'Error getting scrape progress' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
