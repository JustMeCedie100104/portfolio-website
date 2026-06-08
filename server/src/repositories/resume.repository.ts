import { prisma } from "../config/prisma.js";

export const resumeRepository = {
  findActive: () =>
    prisma.resumeFile.findFirst({ where: { isActive: true } }),

  findAll: () =>
    prisma.resumeFile.findMany({ orderBy: { uploadedAt: "desc" } }),

  findById: (id: string) =>
    prisma.resumeFile.findUnique({ where: { id } }),

  create: (data: { filename: string; url: string; version?: number }) =>
    prisma.resumeFile.create({ data }),

  setActive: async (id: string) => {
    // Deactivate all, then activate the target
    await prisma.resumeFile.updateMany({ data: { isActive: false } });
    return prisma.resumeFile.update({ where: { id }, data: { isActive: true } });
  },

  remove: (id: string) =>
    prisma.resumeFile.delete({ where: { id } }),
};
