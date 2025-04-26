import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Group } from '../entities/group.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  name: string;
  email: string;
  password: string;
  groups: Group[];
  isActive: boolean;
}
