import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { userDefinition } from '@packages/models';
import { zodToClass } from 'src/lib/zod-to-schena';

@Schema({
  timestamps: true,
})
export class User extends zodToClass(
  userDefinition.omit({
    _id: true,
    createdAt: true,
    updatedAt: true,
  }),
) {}

export const UserSchema = SchemaFactory.createForClass(User);
