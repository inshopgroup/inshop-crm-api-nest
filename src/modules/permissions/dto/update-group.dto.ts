import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../entities/role.entity';
import { Exists } from '../../core/validators/exists.decorator';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
  id?: number;

  @IsString()
  @ApiProperty()
  name: string;

  @Exists(Role, { message: 'Role not exists' })
  @ApiProperty()
  roles: Role[];
}
