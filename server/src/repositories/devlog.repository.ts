import { prisma } from "../config/prisma.js";
import type { CreateDevLogInput, UpdateDevLogInput } from "../types/devlog.types.js";

export const devlogRepository = {
  findPublished: () =>
    prisma.devLogEntry.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    }),

  findAll: () =>
    prisma.devLogEntry.findMany({ orderBy: { createdAt: "desc" } }),

  findById: (id: string) =>
    prisma.devLogEntry.findUnique({ where: { id } }),

  findBySlug: (slug: string) =>
    prisma.devLogEntry.findUnique({ where: { slug } }),

  create: (data: CreateDevLogInput) =>
    prisma.devLogEntry.create({ data }),

  update: (id: string, data: UpdateDevLogInput) =>
    prisma.devLogEntry.update({ where: { id }, data }),

  remove: (id: string) =>
    prisma.devLogEntry.delete({ where: { id } }),
};
