import { prisma } from "../config/prisma.js";

export const userRepository = {
  findByEmail: (email: string) =>
    prisma.user.findUnique({ where: { email } }),

  findById: (id: string) =>
    prisma.user.findUnique({ where: { id } }),

  create: (data: { email: string; passwordHash: string }) =>
    prisma.user.create({ data }),

  exists: async () => {
    const count = await prisma.user.count();
    return count > 0;
  },
};
