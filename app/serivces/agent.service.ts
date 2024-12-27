import axios from "axios";
import dayjs from "dayjs";

const scrapeApiUrl = process.env.NEXT_PUBLIC_SCRAPE_API;
const apiUrl = process.env.NEXT_PUBLIC_API;

export async function addScrapeLink(scrapeLink: string): Promise<any> {
  try {
    const response = await axios.post(`/api/addScrapeLink`, { link: scrapeLink });
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
    const response = await axios.get(`/api/getScrapeByUsername/${username}`);
    return response?.data;
  } catch (error) {
    console.error("Error adding scrape link:", error);
    throw error;
  }
}

export async function getSampleAgent(): Promise<any> {
  try {
    const response = await axios.get(`/api/getSampleAgent`);
    return response?.data;
  } catch (error) {
    console.error("Error adding scrape link:", error);
    throw error;
  }
}

export async function updateCharacter(data: any): Promise<any> {
  try {
    const response = await axios.post(`/api/updateCharacter`, data);
    return response?.data;
  } catch (error) {
    console.error("Error scraping Twitter:", error);
    throw error;
  }
}

export async function getScrapeProgress(taskId: string): Promise<any> {
  try {
    const response = await axios.get(`/api/getScrapeProgress/${taskId}`);
    return response?.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
