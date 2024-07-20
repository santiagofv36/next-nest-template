import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { createUserInput } from '@packages/models';
import { zodToClass } from 'src/lib/zod-to-schena';

@Schema({
  timestamps: true,
})
export class User extends zodToClass(createUserInput) {}

export const UserSchema = SchemaFactory.createForClass(User);
