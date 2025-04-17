import { Injectable } from '@nestjs/common';
import { CreateContactTypeDto } from '../dto/create-contact-type.dto';
import { UpdateContactTypeDto } from '../dto/update-contact-type.dto';

@Injectable()
export class ContactTypesService {
  create(createContactTypeDto: CreateContactTypeDto) {
    return 'This action adds a new contactType';
  }

  findAll() {
    return `This action returns all contactTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactType`;
  }

  update(id: number, updateContactTypeDto: UpdateContactTypeDto) {
    return `This action updates a #${id} contactType`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactType`;
  }
}
