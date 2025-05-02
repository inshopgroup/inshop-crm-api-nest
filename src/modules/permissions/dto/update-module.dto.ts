import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleDto } from './create-module.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateModuleDto extends PartialType(CreateModuleDto) {
  id?: number;

  @IsString()
  @ApiProperty()
  name: string;
}
