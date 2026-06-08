import { apiFetch } from "@/lib/api";
import type { DevLogEntry, CreateDevLogInput } from "../types";

export const devlogApi = {
  getAll: () => apiFetch<DevLogEntry[]>("/devlog"),
  getById: (id: string) => apiFetch<DevLogEntry>(`/devlog/${id}`),
  create: (input: CreateDevLogInput) =>
    apiFetch<DevLogEntry>("/devlog", {
      method: "POST",
      body: JSON.stringify(input),
    }),
  update: (id: string, input: Partial<CreateDevLogInput>) =>
    apiFetch<DevLogEntry>(`/devlog/${id}`, {
      method: "PUT",
      body: JSON.stringify(input),
    }),
  remove: (id: string) =>
    apiFetch<void>(`/devlog/${id}`, { method: "DELETE" }),
};
