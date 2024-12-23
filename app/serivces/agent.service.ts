import axios from "axios";
import dayjs from "dayjs";

const apiUrl = "https://scraper.sqrfund.ai";

export async function addScrapeLink(scrapeLink: string): Promise<any> {
  try {
    const response = await axios.post(`${apiUrl}/scrape-link`, { link: scrapeLink });
    return response?.data;
  } catch (error) {
    console.error("Error adding scrape link:", error);
    throw error;
  }
}

export async function scrapeTwitter(username: string): Promise<any> {
  try {
    const response = await axios.post(`${apiUrl}/api/characters`, {
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
    const response = await axios.get(`${apiUrl}/api/characters/${username}`);
    return response?.data;
  } catch (error) {
    console.error("Error adding scrape link:", error);
    throw error;
  }
}

export async function getSampleAgent(): Promise<any> {
  try {
    const response = await axios.get(`https://sqrai.sqrfund.ai/agents/d1b9e94b-4448-02cc-bb43-4c2ba12fa15c`);
    return response?.data;
  } catch (error) {
    console.error("Error adding scrape link:", error);
    throw error;
  }
}

export async function updateCharacter(data: any): Promise<any> {
  try {
    const response = await axios.post(`https://sqrai.sqrfund.ai/agents`, data);
    return response?.data;
  } catch (error) {
    console.error("Error scraping Twitter:", error);
    throw error;
  }
}
