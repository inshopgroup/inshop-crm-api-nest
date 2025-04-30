import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
  id?: number;

  @IsString()
  @ApiProperty()
  name: string;
}
