import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { ClientsService } from '../../services/clients.service';
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { IdPipe } from '../../../core/transformers/id.pipe';
import { Client } from '../../entities/client.entity';
import { ObjectPipe } from '../../../core/transformers/parse-object.pipe';

@Controller('admin/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body(ValidationPipe) createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ObjectPipe(Client)) client: Client) {
    return client;
  }

  @Patch(':id')
  async update(
    @Param('id', ObjectPipe(Client)) client: Client,
    @Body(IdPipe, ValidationPipe) updateClientDto: UpdateClientDto,
  ) {
    await this.clientsService.update(client.id, updateClientDto);

    return;
  }

  @Delete(':id')
  async remove(@Param('id', ObjectPipe(Client)) client: Client) {
    await this.clientsService.remove(client.id);

    return;
  }
}
