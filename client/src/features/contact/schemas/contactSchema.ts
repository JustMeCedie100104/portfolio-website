export const contactSchema = {
  name: { min: 2, max: 80 },
  email: { max: 120 },
  subject: { min: 3, max: 150 },
  message: { min: 10, max: 2000 },
} as const;
