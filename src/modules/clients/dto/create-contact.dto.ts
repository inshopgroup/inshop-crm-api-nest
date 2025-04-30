import { IsEnum, IsString } from 'class-validator';
import { IsUnique } from '../../core/validators/is-unique.decorator';
import { Contact } from '../entities/contact.entity';
import ContactType from '../types/contacts.type';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @IsString()
  @ApiProperty()
  value: string;

  @IsEnum(ContactType)
  @IsUnique(Contact, ['value', 'type'], { message: 'Value must be unique' })
  @ApiProperty()
  type: ContactType;
}
