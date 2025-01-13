import { getSchedules } from "@/app/serivces/agent.service";
import { useQuery } from "@tanstack/react-query";

export function useSchedules(agentId: string, publicKey: string) {
  return useQuery({
    queryKey: ["agents", { agentId, publicKey }],
    queryFn: () => {
      if (agentId && publicKey) {
        return getSchedules(agentId, publicKey);
      }
      return Promise.reject(new Error("Missing agentId or publicKey"));
    },
    enabled: !!agentId && !!publicKey,
  });
}
