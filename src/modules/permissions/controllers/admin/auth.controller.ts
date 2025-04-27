import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../../services/auth.service';
import { LoginAuthDto } from '../../dto/login-auth.dto';

@Controller('admin/groups')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body(ValidationPipe) loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }
}
