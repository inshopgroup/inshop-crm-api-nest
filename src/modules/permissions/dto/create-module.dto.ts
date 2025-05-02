import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateModuleDto {
  @IsString()
  @ApiProperty()
  name: string;
}
