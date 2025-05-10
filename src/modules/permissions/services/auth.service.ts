import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto } from '../dto/login-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.usersRepository.findOne({
      where: { email: loginAuthDto.email },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    if (!bcrypt.compareSync(loginAuthDto.password, user.password)) {
      throw new UnauthorizedException();
    }

    const { password, ...payload } = user;

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
