export const projectSchema = {
  title: { min: 3, max: 100 },
  description: { min: 20, max: 2000 },
} as const;
