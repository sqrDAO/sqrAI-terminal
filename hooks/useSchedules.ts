import { getSchedules } from "@/app/serivces/agent.service";
import { useQuery } from "@tanstack/react-query";

export function useSchedules(publicKey: string) {
  return useQuery({ queryKey: ["agents", publicKey], queryFn: () => getSchedules(publicKey) });
}
