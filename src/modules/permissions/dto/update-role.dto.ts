import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { Module } from '../entities/module.entity';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  name: string;
  role: string;
  module: Module;
}
