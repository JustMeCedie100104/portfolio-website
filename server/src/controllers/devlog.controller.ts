import { devlogService } from "../services/devlog.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { getParam } from "../utils/params.js";
import { devlogSchema } from "../validators/devlog.validator.js";

export const devlogController = {
  // Public
  getAll: asyncHandler(async (_req, res) => {
    const entries = await devlogService.getPublished();
    res.json(entries);
  }),

  getBySlug: asyncHandler(async (req, res) => {
    const entry = await devlogService.getBySlug(getParam(req, "slug"));
    if (!entry) {
      res.status(404).json({ error: "Dev log entry not found" });
      return;
    }
    res.json(entry);
  }),

  // Admin
  getAllAdmin: asyncHandler(async (_req, res) => {
    const entries = await devlogService.getAll();
    res.json(entries);
  }),

  create: asyncHandler(async (req, res) => {
    const input = devlogSchema.parse(req.body);
    const entry = await devlogService.create(input);
    res.status(201).json(entry);
  }),

  update: asyncHandler(async (req, res) => {
    const input = devlogSchema.partial().parse(req.body);
    const entry = await devlogService.update(getParam(req, "id"), input);
    res.json(entry);
  }),

  remove: asyncHandler(async (req, res) => {
    await devlogService.remove(getParam(req, "id"));
    res.status(204).send();
  }),
};
