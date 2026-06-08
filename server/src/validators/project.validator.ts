import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(3).max(100),
  slug: z
    .string()
    .min(3)
    .max(100)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase-hyphen format"),
  description: z.string().min(20).max(2000),
  techStack: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  published: z.boolean().default(false),
  githubUrl: z.string().url().optional().or(z.literal("")),
  liveUrl: z.string().url().optional().or(z.literal("")),
  imageUrl: z.string().url().optional().or(z.literal("")),
  sortOrder: z.number().int().default(0),
});

export const analyticsTrackSchema = z.object({
  path: z.string().min(1).max(500),
  visitorId: z.string().optional(),
});

export type ProjectInput = z.infer<typeof projectSchema>;
