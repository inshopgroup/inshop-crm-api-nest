import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleDto } from './create-module.dto';
import { Role } from '../entities/role.entity';

export class UpdateModuleDto extends PartialType(CreateModuleDto) {
  name: string;
  roles: Role[];
}
