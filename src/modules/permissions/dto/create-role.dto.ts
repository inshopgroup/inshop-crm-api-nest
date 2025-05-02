import { Module } from '../entities/module.entity';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Exists } from '../../core/validators/exists.decorator';

export class CreateRoleDto {
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
