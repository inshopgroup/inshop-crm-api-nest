import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  ParseIntPipe,
  DefaultValuePipe,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ClientsService } from '../../services/clients.service';
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { IdPipe } from '../../../core/transformers/id.pipe';
import { Client } from '../../entities/client.entity';
import { ObjectPipe } from '../../../core/transformers/parse-object.pipe';
import { AuthAdminGuard } from '../../../permissions/guards/authAdmin.guard';
import { ApiQuery } from '@nestjs/swagger';

@UseGuards(AuthAdminGuard)
@Controller('admin/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body(ValidationPipe) createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  async findAll(
    @Query('take', new DefaultValuePipe(30), new ParseIntPipe()) take: number,
    @Query('skip', new DefaultValuePipe(0), new ParseIntPipe()) skip: number,
  ) {
    return this.clientsService.findAll(take, skip);
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
