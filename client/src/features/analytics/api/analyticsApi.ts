import { apiFetch } from "@/lib/api";
import type { AnalyticsSummary } from "../types";

export const analyticsApi = {
  getSummary: () => apiFetch<AnalyticsSummary>("/analytics/summary"),
  trackPageView: (path: string) =>
    apiFetch<void>("/analytics/track", {
      method: "POST",
      body: JSON.stringify({ path }),
    }),
};
