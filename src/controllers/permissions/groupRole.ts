import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../services/app.service';

@Controller()
export class GroupRole {
  constructor(private readonly appService: AppService) {}

  @Get()
  get(): string {
    return this.appService.getHello();
  }
}
