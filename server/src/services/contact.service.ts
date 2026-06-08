import { contactRepository } from "../repositories/contact.repository.js";
import type { CreateContactInput } from "../types/contact.types.js";

export const contactService = {
  getAll: () => contactRepository.findAll(),
  getById: (id: string) => contactRepository.findById(id),
  getUnread: () => contactRepository.findUnread(),
  countUnread: () => contactRepository.countUnread(),
  submit: (data: CreateContactInput) => contactRepository.create(data),
  markRead: (id: string) => contactRepository.markRead(id),
  remove: (id: string) => contactRepository.remove(id),
};
