import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto } from '../dto/login-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
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

    // TODO: Generate a JWT and return it here
    return user;
  }
}
