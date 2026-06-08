import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  // Zod validation errors → 422
  if (err instanceof ZodError) {
    res.status(422).json({
      error: "Validation failed",
      issues: err.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      })),
    });
    return;
  }

  // Known domain errors (invalid credentials, not found, etc.)
  if (err.message === "Invalid credentials") {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  if (err.message === "User not found") {
    res.status(404).json({ error: "User not found" });
    return;
  }

  // Default 500
  console.error("[Error]", err);
  res.status(500).json({
    error:
      process.env.NODE_ENV === "development" ? err.message : "Internal server error",
  });
}
