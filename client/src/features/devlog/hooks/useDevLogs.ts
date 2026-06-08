import { useQuery } from "@tanstack/react-query";
import { devlogApi } from "../api/devlogApi";

export function useDevLogs() {
  return useQuery({
    queryKey: ["devlog"],
    queryFn: devlogApi.getAll,
  });
}
