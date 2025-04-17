import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactTypesService } from '../services/contact-types.service';
import { CreateContactTypeDto } from '../dto/create-contact-type.dto';
import { UpdateContactTypeDto } from '../dto/update-contact-type.dto';

@Controller('contact-types')
export class ContactTypesController {
  constructor(private readonly contactTypesService: ContactTypesService) {}

  @Post()
  create(@Body() createContactTypeDto: CreateContactTypeDto) {
    return this.contactTypesService.create(createContactTypeDto);
  }

  @Get()
  findAll() {
    return this.contactTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactTypeDto: UpdateContactTypeDto) {
    return this.contactTypesService.update(+id, updateContactTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactTypesService.remove(+id);
  }
}
