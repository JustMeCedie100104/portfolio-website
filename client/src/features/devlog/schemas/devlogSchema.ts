export const devlogSchema = {
  title: { min: 3, max: 120 },
  summary: { min: 10, max: 300 },
  content: { min: 20 },
} as const;
