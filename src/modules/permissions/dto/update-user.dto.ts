import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Group } from '../entities/group.entity';
import { IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsUnique } from '../../core/validators/is-unique.decorator';
import { User } from '../entities/user.entity';
import { Exists } from '../../core/validators/exists.decorator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id?: number;

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @IsUnique(User, ['email'], { message: 'Email must be unique' })
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;

  @Exists(Group, { message: 'Group not exists' })
  @ApiProperty()
  group: Group;

  @IsBoolean()
  @ApiProperty()
  isActive: boolean;
}
