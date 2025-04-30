import { Group } from '../entities/group.entity';
import { IsBoolean, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsUnique } from '../../core/validators/is-unique.decorator';
import { User } from '../entities/user.entity';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsEmail()
  @IsUnique(User, ['email'], { message: 'Email must be unique' })
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;

  @ApiProperty()
  group: Group;

  @IsBoolean()
  @ApiProperty()
  isActive: boolean;
}
