import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';
import { Role } from '../entities/role.entity';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
  name: string;
  roles: Role[];
}
