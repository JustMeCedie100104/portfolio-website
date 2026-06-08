import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  subject: z.string().min(3).max(150),
  message: z.string().min(10).max(2000),
});
