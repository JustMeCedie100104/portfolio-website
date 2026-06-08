import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { authLimiter } from "../middleware/rateLimiter.js";

export const authRoutes = Router();

authRoutes.post("/login", authLimiter, authController.login);
authRoutes.post("/logout", requireAuth, authController.logout);
authRoutes.get("/profile", requireAuth, authController.profile);
