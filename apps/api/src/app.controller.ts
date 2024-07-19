import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IUser } from '@packages/models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
