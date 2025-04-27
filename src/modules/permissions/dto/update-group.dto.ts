import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';
import { IsString } from 'class-validator';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
  id?: number;

  @IsString()
  name: string;
}
