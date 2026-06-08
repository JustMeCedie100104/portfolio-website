import { Router } from "express";
import { resumeController } from "../controllers/resume.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

export const resumeRoutes = Router();

// ── Public ──────────────────────────────────────────────────
resumeRoutes.get("/active", resumeController.getActive);

// ── Admin ────────────────────────────────────────────────────
resumeRoutes.get("/", requireAuth, resumeController.getAll);
resumeRoutes.post("/", requireAuth, resumeController.upload);
resumeRoutes.patch("/:id/activate", requireAuth, resumeController.setActive);
resumeRoutes.delete("/:id", requireAuth, resumeController.remove);
