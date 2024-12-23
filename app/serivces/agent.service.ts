import axios from "axios";

const apiUrl = "http://localhost:3001/api";

export async function addScrapeLink(scrapeLink: string): Promise<any> {
  try {
    const response = await axios.post(`${apiUrl}/scrape-link`, { link: scrapeLink });
    return response?.data;
  } catch (error) {
    console.error("Error adding scrape link:", error);
    throw error;
  }
}

export async function scrapeTwitter(scrapeLink: string): Promise<any> {
  try {
    const response = await axios.post(`${apiUrl}/scrape`, { link: scrapeLink });
    return response?.data;
  } catch (error) {
    console.error("Error scraping Twitter:", error);
    throw error;
  }
}
