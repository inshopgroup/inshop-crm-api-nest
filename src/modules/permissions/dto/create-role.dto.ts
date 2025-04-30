import { Module } from '../entities/module.entity';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  role: string;

  @ApiProperty()
  module: Module;
}
