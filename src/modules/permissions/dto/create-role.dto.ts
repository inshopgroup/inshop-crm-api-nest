import { Module } from '../entities/module.entity';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  name: string;

  @IsString()
  role: string;

  module: Module;
}
