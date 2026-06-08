import { useQuery } from "@tanstack/react-query";
import { analyticsApi } from "../api/analyticsApi";

export function useAnalytics() {
  return useQuery({
    queryKey: ["analytics", "summary"],
    queryFn: analyticsApi.getSummary,
  });
}
