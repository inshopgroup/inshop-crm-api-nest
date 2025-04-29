import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  NotFoundException,
} from '@nestjs/common';
import { ClientsService } from '../../services/clients.service';
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { IdPipe } from '../../../core/transformers/id.pipe';

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
  async findOne(@Param('id') id: string) {
    const client = await this.clientsService.findOne(+id);

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    return client;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(IdPipe, ValidationPipe) updateClientDto: UpdateClientDto,
  ) {
    const client = await this.clientsService.findOne(+id);

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    await this.clientsService.update(+id, updateClientDto);

    return this.clientsService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const client = await this.clientsService.findOne(+id);

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    return this.clientsService.remove(+id);
  }
}
