import axios from "axios";
import { NextApiRequest, NextApiResponse } from 'next';

const apiUrl = process.env.NEXT_PUBLIC_API;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const response = await axios.get(`${apiUrl}/agents/d1b9e94b-4448-02cc-bb43-4c2ba12fa15c`);
      res.status(200).json(response?.data);
    } catch (error) {
      console.error("Error getting sample agent:", error);
      res.status(500).json({ error: 'Error getting sample agent' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
