import { Module } from '@nestjs/common';
import { ClientsService } from './services/clients.service';
import { ClientsController } from './controllers/clients.controller';
import { ContactTypesController } from './controllers/contact-types.controller';
import { ContactsController } from './controllers/contacts.controller';
import { ContactTypesService } from './services/contact-types.service';
import { ContactsService } from './services/contacts.service';

@Module({
  controllers: [
    ClientsController,
    ContactTypesController,
    ContactsController,
  ],
  providers: [
    ClientsService,
    ContactTypesService,
    ContactsService,
  ],
})
export class ClientsModule {}
