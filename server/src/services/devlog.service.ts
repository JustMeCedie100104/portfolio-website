import { devlogRepository } from "../repositories/devlog.repository.js";
import type { CreateDevLogInput, UpdateDevLogInput } from "../types/devlog.types.js";

export const devlogService = {
  getPublished: () => devlogRepository.findPublished(),
  getAll: () => devlogRepository.findAll(),
  getById: (id: string) => devlogRepository.findById(id),
  getBySlug: (slug: string) => devlogRepository.findBySlug(slug),
  create: (data: CreateDevLogInput) => devlogRepository.create(data),
  update: (id: string, data: UpdateDevLogInput) => devlogRepository.update(id, data),
  remove: (id: string) => devlogRepository.remove(id),
};
