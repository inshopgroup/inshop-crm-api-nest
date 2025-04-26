import { Module } from '../entities/module.entity';

export class CreateRoleDto {
  name: string;
  role: string;
  module: Module;
}
