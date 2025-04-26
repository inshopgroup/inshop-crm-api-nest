import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';
import { IsEnum, IsString } from 'class-validator';
import { IsUnique } from '../../core/validators/is-unique.decorator';
import { Contact } from '../entities/contact.entity';
import ContactType from '../types/contacts.type';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  @IsString()
  @IsUnique(Contact, ['value', 'type'], { message: 'Value must be unique' })
  value: string;

  @IsString()
  @IsEnum(ContactType)
  type: ContactType;
}
