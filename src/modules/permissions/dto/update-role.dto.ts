import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { Module } from '../entities/module.entity';
import { IsString } from 'class-validator';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  id?: number;

  @IsString()
  name: string;

  @IsString()
  role: string;

  module: Module;
}
