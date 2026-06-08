import { apiFetch } from "@/lib/api";
import type { Project } from "../types";

export const projectApi = {
  getAll: () => apiFetch<Project[]>("/projects"),
  getBySlug: (slug: string) => apiFetch<Project>(`/projects/${slug}`),
};
