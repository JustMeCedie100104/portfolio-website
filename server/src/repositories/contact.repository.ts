import { prisma } from "../config/prisma.js";
import type { CreateContactInput } from "../types/contact.types.js";

export const contactRepository = {
  findAll: () =>
    prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } }),

  findById: (id: string) =>
    prisma.contactMessage.findUnique({ where: { id } }),

  findUnread: () =>
    prisma.contactMessage.findMany({
      where: { read: false },
      orderBy: { createdAt: "desc" },
    }),

  countUnread: () =>
    prisma.contactMessage.count({ where: { read: false } }),

  create: (data: CreateContactInput) =>
    prisma.contactMessage.create({ data }),

  markRead: (id: string) =>
    prisma.contactMessage.update({ where: { id }, data: { read: true } }),

  remove: (id: string) =>
    prisma.contactMessage.delete({ where: { id } }),
};
