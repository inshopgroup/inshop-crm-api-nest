import { Controller, Post } from '@nestjs/common';
import { AppService } from '../../services/app.service';

@Controller()
export class GroupRole {
  constructor(private readonly appService: AppService) {}

  @Post()
  login(): string {
    return this.appService.getHello();
  }
}
