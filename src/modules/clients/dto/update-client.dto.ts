import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsString } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {
  @IsString()
  name: string;

  @IsString()
  password: string;
}
