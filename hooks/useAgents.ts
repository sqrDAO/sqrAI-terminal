import { getAgents } from "@/app/serivces/agent.service";
import { useQuery } from "@tanstack/react-query";

export function useAgents() {
  return useQuery({ queryKey: ["agents"], queryFn: getAgents });
}
