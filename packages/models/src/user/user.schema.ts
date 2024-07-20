import type { z } from 'zod';
import { userDefinition } from './user.dto';
import { Document, type Types, Schema } from 'mongoose';


export type IUser = z.infer<typeof userDefinition>;

export type UserDocument = IUser & Document<Types.ObjectId, object, IUser>;

export const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
