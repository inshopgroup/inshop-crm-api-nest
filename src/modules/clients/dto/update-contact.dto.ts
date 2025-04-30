import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';
import { IsEnum, IsString } from 'class-validator';
import { IsUnique } from '../../core/validators/is-unique.decorator';
import { Contact } from '../entities/contact.entity';
import ContactType from '../types/contacts.type';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  id?: number;

  @IsString()
  @ApiProperty()
  value: string;

  @IsEnum(ContactType)
  @IsUnique(Contact, ['type', 'value'], { message: 'Value must be unique' })
  @ApiProperty()
  type: ContactType;
}
