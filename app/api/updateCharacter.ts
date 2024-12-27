import axios from "axios";
import { NextApiRequest, NextApiResponse } from 'next';

const apiUrl = process.env.NEXT_PUBLIC_API;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      const response = await axios.post(`${apiUrl}/agents`, data);
      res.status(200).json(response?.data);
    } catch (error) {
      console.error("Error updating character:", error);
      res.status(500).json({ error: 'Error updating character' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
