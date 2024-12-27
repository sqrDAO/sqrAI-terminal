import axios from "axios";
import dayjs from "dayjs";

const scrapeApiUrl = process.env.NEXT_PUBLIC_SCRAPE_API;
const apiUrl = process.env.NEXT_PUBLIC_API;

export async function addScrapeLink(scrapeLink: string): Promise<any> {
  try {
    const response = await axios.post(`${scrapeApiUrl}/scrape-link`, { link: scrapeLink });
    return response?.data;
  } catch (error) {
    console.error("Error adding scrape link:", error);
    throw error;
  }
}

export async function scrapeTwitter(username: string): Promise<any> {
  try {
    const response = await axios.post(`/api/scrapeTwitter`, {
      username: username, // twitter username
      date: dayjs().format("YYYY-MM-DD"), // generate character from this date "2024-12-23"
      is_crawl: true, // scrape tweets and blogs
    });
    return response?.data;
  } catch (error) {
    console.error("Error scraping Twitter:", error);
    throw error;
  }
}

export async function getScrapeByUsername(username: string): Promise<any> {
  try {
    const response = await axios.get(`${scrapeApiUrl}/api/characters/${username}`);
    return response?.data;
  } catch (error) {
    console.error("Error adding scrape link:", error);
    throw error;
  }
}

export async function getSampleAgent(): Promise<any> {
  try {
    const response = await axios.get(`${apiUrl}/agents/d1b9e94b-4448-02cc-bb43-4c2ba12fa15c`);
    return response?.data;
  } catch (error) {
    console.error("Error adding scrape link:", error);
    throw error;
  }
}

export async function updateCharacter(data: any): Promise<any> {
  try {
    const response = await axios.post(`${apiUrl}/agents`, data);
    return response?.data;
  } catch (error) {
    console.error("Error scraping Twitter:", error);
    throw error;
  }
}

export async function getScrapeProgress(taskId: string): Promise<any> {
  try {
    const response = await axios.get(`${scrapeApiUrl}/api/task-progress/${taskId}`);
    return response?.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
