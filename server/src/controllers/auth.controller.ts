import { authService } from "../services/auth.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { loginSchema } from "../validators/auth.validator.js";

export const authController = {
  login: asyncHandler(async (req, res) => {
    const { email, password } = loginSchema.parse(req.body);
    const result = await authService.login(email, password);
    res.json(result);
  }),

  logout: asyncHandler(async (_req, res) => {
    // JWT is stateless — client discards the token.
    // If you add a token blacklist (Redis) in future, invalidate here.
    res.json({ message: "Logged out successfully" });
  }),

  profile: asyncHandler(async (req, res) => {
    const userId = req.user!.sub;
    const profile = await authService.getProfile(userId);
    res.json(profile);
  }),
};
