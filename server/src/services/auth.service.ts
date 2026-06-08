import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { userRepository } from "../repositories/user.repository.js";
import type { JwtPayload, LoginResult } from "../types/auth.types.js";

const BCRYPT_ROUNDS = 12;

export const authService = {
  /**
   * Validate credentials and return a signed JWT.
   */
  login: async (email: string, password: string): Promise<LoginResult> => {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      throw new Error("Invalid credentials");
    }

    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    } as jwt.SignOptions);

    return {
      token,
      user: { id: user.id, email: user.email, role: user.role },
    };
  },

  /**
   * Verify a JWT and return its payload.
   */
  verifyToken: (token: string): JwtPayload => {
    return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
  },

  /**
   * Return the profile of the authenticated user (by id from token).
   */
  getProfile: async (userId: string) => {
    const user = await userRepository.findById(userId);
    if (!user) throw new Error("User not found");
    return { id: user.id, email: user.email, role: user.role };
  },

  /**
   * Hash a plain-text password (used by seed / setup).
   */
  hashPassword: (plain: string) => bcrypt.hash(plain, BCRYPT_ROUNDS),
};
