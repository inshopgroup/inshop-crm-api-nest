import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleDto } from './create-module.dto';
import { Role } from '../entities/role.entity';
import { IsString } from 'class-validator';

export class UpdateModuleDto extends PartialType(CreateModuleDto) {
  id?: number;

  @IsString()
  name: string;

  roles: Role[];
}
