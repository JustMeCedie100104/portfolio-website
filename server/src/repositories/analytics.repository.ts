import { prisma } from "../config/prisma.js";

export const analyticsRepository = {
  track: (path: string, visitorId?: string) =>
    prisma.pageView.create({ data: { path, visitorId } }),

  countViews: () => prisma.pageView.count(),

  countUniqueVisitors: () =>
    prisma.pageView
      .groupBy({ by: ["visitorId"], where: { visitorId: { not: null } } })
      .then((r) => r.length),

  topPages: (limit = 10) =>
    prisma.pageView.groupBy({
      by: ["path"],
      _count: { path: true },
      orderBy: { _count: { path: "desc" } },
      take: limit,
    }),

  viewsLast30Days: () => {
    const since = new Date();
    since.setDate(since.getDate() - 30);
    return prisma.pageView.count({ where: { createdAt: { gte: since } } });
  },
};
