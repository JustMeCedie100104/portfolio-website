import { resumeRepository } from "../repositories/resume.repository.js";

export const resumeService = {
  getActive: () => resumeRepository.findActive(),
  getAll: () => resumeRepository.findAll(),
  getById: (id: string) => resumeRepository.findById(id),
  upload: (data: { filename: string; url: string; version?: number }) =>
    resumeRepository.create(data),
  setActive: (id: string) => resumeRepository.setActive(id),
  remove: (id: string) => resumeRepository.remove(id),
};
