import { Router } from "express";
import { devlogController } from "../controllers/devlog.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

export const devlogRoutes = Router();

// ── Public ──────────────────────────────────────────────────
devlogRoutes.get("/", devlogController.getAll);
devlogRoutes.get("/:slug", devlogController.getBySlug);

// ── Admin ────────────────────────────────────────────────────
devlogRoutes.get("/admin/all", requireAuth, devlogController.getAllAdmin);
devlogRoutes.post("/", requireAuth, devlogController.create);
devlogRoutes.put("/:id", requireAuth, devlogController.update);
devlogRoutes.delete("/:id", requireAuth, devlogController.remove);
