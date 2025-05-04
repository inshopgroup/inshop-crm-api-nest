import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../entities/role.entity';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
  id?: number;

  @IsString()
  @ApiProperty()
  name: string;

  @ApiProperty()
  roles: Role[];
}
