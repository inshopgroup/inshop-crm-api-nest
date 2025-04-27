import { Group } from '../entities/group.entity';
import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  groups: Group[];

  @IsBoolean()
  isActive: boolean;
}
