import { analyticsRepository } from "../repositories/analytics.repository.js";

export const analyticsService = {
  trackPageView: (path: string, visitorId?: string) =>
    analyticsRepository.track(path, visitorId),
  getSummary: async () => {
    const [totalViews, topPages] = await Promise.all([
      analyticsRepository.countViews(),
      analyticsRepository.topPages(),
    ]);

    return {
      totalViews,
      uniqueVisitors: 0,
      topPages: topPages.map((p) => ({
        path: p.path,
        count: p._count.path,
      })),
      period: "all-time",
    };
  },
};
