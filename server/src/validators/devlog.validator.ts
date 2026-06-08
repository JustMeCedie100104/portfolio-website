import { z } from "zod";

export const devlogSchema = z.object({
  title: z.string().min(3).max(120),
  slug: z
    .string()
    .min(3)
    .max(120)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase-hyphen format"),
  summary: z.string().min(10).max(500),
  content: z.string().min(20),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(false),
});

export type DevLogInput = z.infer<typeof devlogSchema>;
