import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { createUserInput } from '@packages/models';
import { hash } from 'argon2';
import { zodToClass } from 'src/lib/zod-to-schena';

@Schema({
  timestamps: true,
})
export class User extends zodToClass(createUserInput) {
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = (
    await hash(this.password!, { secret: process.env.SECRET })
  ).toString();
  next();
});
