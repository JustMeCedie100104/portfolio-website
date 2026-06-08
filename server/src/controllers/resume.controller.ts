import { resumeService } from "../services/resume.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { getParam } from "../utils/params.js";
import { z } from "zod";

const resumeUploadSchema = z.object({
  filename: z.string().min(1).max(255),
  url: z.string().url("Must be a valid URL"),
  version: z.number().int().positive().optional(),
});

export const resumeController = {
  // Public
  getActive: asyncHandler(async (_req, res) => {
    const resume = await resumeService.getActive();
    if (!resume) {
      res.status(404).json({ error: "No active resume" });
      return;
    }
    res.json(resume);
  }),

  // Admin
  getAll: asyncHandler(async (_req, res) => {
    const resumes = await resumeService.getAll();
    res.json(resumes);
  }),

  upload: asyncHandler(async (req, res) => {
    const input = resumeUploadSchema.parse(req.body);
    const resume = await resumeService.upload(input);
    res.status(201).json(resume);
  }),

  setActive: asyncHandler(async (req, res) => {
    const resume = await resumeService.setActive(getParam(req, "id"));
    res.json(resume);
  }),

  remove: asyncHandler(async (req, res) => {
    await resumeService.remove(getParam(req, "id"));
    res.status(204).send();
  }),
};
