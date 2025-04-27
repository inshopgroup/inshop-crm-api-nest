import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';
import { IsEnum, IsString } from 'class-validator';
import { IsUnique } from '../../core/validators/is-unique.decorator';
import { Contact } from '../entities/contact.entity';
import ContactType from '../types/contacts.type';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  id?: number;

  @IsString()
  value: string;

  @IsEnum(ContactType)
  @IsUnique(Contact, ['type', 'value'], { message: 'Value must be unique' })
  type: ContactType;
}
