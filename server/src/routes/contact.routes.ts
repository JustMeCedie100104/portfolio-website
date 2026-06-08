import { Router } from "express";
import { contactController } from "../controllers/contact.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { contactLimiter } from "../middleware/rateLimiter.js";

export const contactRoutes = Router();

// ── Public ──────────────────────────────────────────────────
contactRoutes.post("/", contactLimiter, contactController.submit);

// ── Admin ────────────────────────────────────────────────────
contactRoutes.get("/", requireAuth, contactController.getAll);
contactRoutes.get("/:id", requireAuth, contactController.getById);
contactRoutes.patch("/:id/read", requireAuth, contactController.markRead);
contactRoutes.delete("/:id", requireAuth, contactController.remove);
