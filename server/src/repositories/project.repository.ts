import { prisma } from "../config/prisma.js";
import type { CreateProjectInput, UpdateProjectInput } from "../types/project.types.js";

export const projectRepository = {
  findAll: () =>
    prisma.project.findMany({
      where: { published: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    }),

  findAllAdmin: () =>
    prisma.project.findMany({
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    }),

  findFeatured: () =>
    prisma.project.findMany({
      where: { featured: true, published: true },
      orderBy: { sortOrder: "asc" },
    }),

  findBySlug: (slug: string) =>
    prisma.project.findUnique({ where: { slug } }),

  findById: (id: string) =>
    prisma.project.findUnique({ where: { id } }),

  create: (data: CreateProjectInput) =>
    prisma.project.create({ data }),

  update: (id: string, data: UpdateProjectInput) =>
    prisma.project.update({ where: { id }, data }),

  remove: (id: string) =>
    prisma.project.delete({ where: { id } }),
};
