import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { Module } from '../entities/module.entity';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Exists } from '../../core/validators/exists.decorator';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  id?: number;

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  role: string;

  @Exists(Module, { message: 'Module not exists' })
  @ApiProperty()
  module: Module;
}
