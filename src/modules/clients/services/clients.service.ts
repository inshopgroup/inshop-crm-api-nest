import { Injectable } from '@nestjs/common';
import { CreateClientDto } from '../dto/create-client.dto';
import { UpdateClientDto } from '../dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from '../entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const client = this.clientsRepository.create(createClientDto);

    return this.clientsRepository.save(client);
  }

  findAll(take: number, skip: number) {
    return this.clientsRepository.findAndCount({
      take,
      skip,
    });
  }

  findOne(id: number) {
    return this.clientsRepository.findOne({
      where: { id },
      relations: {
        contacts: true,
      },
    });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.clientsRepository.update(id, updateClientDto);
  }

  remove(id: number) {
    return this.clientsRepository.delete(id);
  }
}
