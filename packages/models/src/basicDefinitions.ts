import { z } from 'zod';

export const basicModelDefinition = z.object({
  _id: z.string().optional(),
  active: z.boolean().optional(),
  createdAt: z.string().datetime().or(z.date()).nullable().optional(),
  updatedAt: z.string().datetime().or(z.date()).nullable().optional(),
});
