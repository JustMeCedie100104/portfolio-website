import { Router } from "express";
import { analyticsController } from "../controllers/analytics.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

export const analyticsRoutes = Router();

// ── Public ──────────────────────────────────────────────────
analyticsRoutes.post("/track", analyticsController.track);

// ── Admin ────────────────────────────────────────────────────
analyticsRoutes.get("/summary", requireAuth, analyticsController.getSummary);
