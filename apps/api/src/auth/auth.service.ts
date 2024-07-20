import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser, TCreateUserInput } from '@packages/models';
import { Model } from 'mongoose';
import { hash } from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User')
    private User: Model<IUser>,
  ) {}

  async signUp(data: TCreateUserInput) {
    const { password } = data;
    const hashed = await hash(password!, { secret: process.env.SECRET });
    const user = await this.User.create({
      ...data,
      password: hashed,
    });
    return user;
  }

  async getUsers() {
    return this.User.find();
  }
}
