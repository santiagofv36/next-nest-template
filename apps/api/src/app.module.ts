import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule,
    AuthModule,
    UserModule,
    AddressModule,
    MongooseModule.forRoot(process.env.DB_URI!),
  ],
  controllers: [],
})
export class AppModule {}
