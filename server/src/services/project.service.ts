import { projectRepository } from "../repositories/project.repository.js";
import type { CreateProjectInput, UpdateProjectInput } from "../types/project.types.js";

export const projectService = {
  getAll: () => projectRepository.findAll(),
  getAllAdmin: () => projectRepository.findAllAdmin(),
  getFeatured: () => projectRepository.findFeatured(),
  getBySlug: (slug: string) => projectRepository.findBySlug(slug),
  getById: (id: string) => projectRepository.findById(id),
  create: (data: CreateProjectInput) => projectRepository.create(data),
  update: (id: string, data: UpdateProjectInput) => projectRepository.update(id, data),
  remove: (id: string) => projectRepository.remove(id),
};
