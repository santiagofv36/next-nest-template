import type { z } from 'zod';
import { userDefinition } from './user.dto';

export type IUser = z.infer<typeof userDefinition>;
