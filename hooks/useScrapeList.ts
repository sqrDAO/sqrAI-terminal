import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchScrapeList = async () => {
  const { data } = await axios.get("/api/scrapeList");
  return data;
};

const useScrapeList = () => {
  return useQuery({
    queryKey: ["scrapeList"],
    queryFn: () => fetchScrapeList(),
  });
};

export default useScrapeList;
