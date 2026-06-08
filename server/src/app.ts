import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { apiLimiter } from "./middleware/rateLimiter.js";
import { projectRoutes } from "./routes/project.routes.js";
import { contactRoutes } from "./routes/contact.routes.js";
import { resumeRoutes } from "./routes/resume.routes.js";
import { analyticsRoutes } from "./routes/analytics.routes.js";
import { authRoutes } from "./routes/auth.routes.js";
import { devlogRoutes } from "./routes/devlog.routes.js";

export function createApp() {
  const app = express();

  // ── Security ─────────────────────────────────────────────
  app.use(helmet());
  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

  // ── Body parsing ─────────────────────────────────────────
  app.use(express.json({ limit: "1mb" }));

  // ── Global rate limit ────────────────────────────────────
  app.use("/api", apiLimiter);

  // ── Health check ─────────────────────────────────────────
  app.get("/health", (_req, res) => {
    res.json({ status: "ok", env: env.NODE_ENV });
  });

  // ── API Routes ───────────────────────────────────────────
  app.use("/api/auth", authRoutes);
  app.use("/api/projects", projectRoutes);
  app.use("/api/contact", contactRoutes);
  app.use("/api/resume", resumeRoutes);
  app.use("/api/analytics", analyticsRoutes);
  app.use("/api/devlogs", devlogRoutes);

  // ── Error handling ───────────────────────────────────────
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
