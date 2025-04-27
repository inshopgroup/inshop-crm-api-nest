import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Group } from '../entities/group.entity';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  groups: Group[];

  @IsBoolean()
  isActive: boolean;
}
