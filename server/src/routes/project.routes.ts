import { Router } from "express";
import { projectController } from "../controllers/project.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

export const projectRoutes = Router();

// ── Public ──────────────────────────────────────────────────
projectRoutes.get("/", projectController.getAll);
projectRoutes.get("/featured", projectController.getFeatured);
projectRoutes.get("/:slug", projectController.getBySlug);

// ── Admin ────────────────────────────────────────────────────
projectRoutes.get("/admin/all", requireAuth, projectController.getAllAdmin);
projectRoutes.post("/", requireAuth, projectController.create);
projectRoutes.put("/:id", requireAuth, projectController.update);
projectRoutes.delete("/:id", requireAuth, projectController.remove);
