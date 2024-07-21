import { z } from 'zod';
import { basicModelDefinition } from '../basicDefinitions';
import { sessionDefinition } from '../session';

export const userDefinition = basicModelDefinition.extend({
  email: z.string().email({ message: 'Invalid email' }),
  name: z.string().min(2),
  password: z.string().min(8),
  activeSessions: sessionDefinition,
});

export const createUserInput = userDefinition.omit({
  _id: true,
  createdAt: true,
  updatedAt: true,
  activeSessions: true,
});

export type TCreateUserInput = z.infer<typeof createUserInput>;

// Pagination
export const filterUserInput = userDefinition.partial().optional();
export type TFilterUsersInput = z.infer<typeof filterUserInput>;

// Search by email

export const findUserByEmail = userDefinition
  .pick({
    email: true,
  })
  .required();

export type TFindUserByEmail = z.infer<typeof findUserByEmail>;
