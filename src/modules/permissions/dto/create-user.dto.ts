import { Group } from '../entities/group.entity';
import { IsBoolean, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;

  groups: Group[];

  @IsBoolean()
  @ApiProperty()
  isActive: boolean;
}
