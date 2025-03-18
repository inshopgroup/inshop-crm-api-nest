import { Controller, Post } from '@nestjs/common';
import { AppService } from '../../services/app.service';

@Controller()
export class UserGroup {
  constructor(private readonly appService: AppService) {}

  @Post()
  login(): string {
    return this.appService.getHello();
  }
}
