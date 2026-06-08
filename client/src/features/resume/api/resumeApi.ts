import { apiFetch } from "@/lib/api";
import type { ResumeFile } from "../types";

export const resumeApi = {
  getActive: () => apiFetch<ResumeFile>("/resume/active"),
};
