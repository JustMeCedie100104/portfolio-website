import { projectService } from "../services/project.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { projectSchema } from "../validators/project.validator.js";
import { getParam } from "../utils/params.js";

export const projectController = {
  // Public
  getAll: asyncHandler(async (_req, res) => {
    const projects = await projectService.getAll();
    res.json(projects);
  }),

  getFeatured: asyncHandler(async (_req, res) => {
    const projects = await projectService.getFeatured();
    res.json(projects);
  }),

  getBySlug: asyncHandler(async (req, res) => {
    const project = await projectService.getBySlug(getParam(req, "slug"));
    if (!project) {
      res.status(404).json({ error: "Project not found" });
      return;
    }
    res.json(project);
  }),

  // Admin
  getAllAdmin: asyncHandler(async (_req, res) => {
    const projects = await projectService.getAllAdmin();
    res.json(projects);
  }),

  create: asyncHandler(async (req, res) => {
    const input = projectSchema.parse(req.body);
    const project = await projectService.create(input);
    res.status(201).json(project);
  }),

  update: asyncHandler(async (req, res) => {
    const input = projectSchema.partial().parse(req.body);
    const project = await projectService.update(getParam(req, "id"), input);
    res.json(project);
  }),

  remove: asyncHandler(async (req, res) => {
    await projectService.remove(getParam(req, "id"));
    res.status(204).send();
  }),
};
