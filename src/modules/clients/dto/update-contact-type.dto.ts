import { PartialType } from '@nestjs/mapped-types';
import { CreateContactTypeDto } from './create-contact-type.dto';

export class UpdateContactTypeDto extends PartialType(CreateContactTypeDto) {}
