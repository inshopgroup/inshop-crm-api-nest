import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from '../dto/create-module.dto';
import { UpdateModuleDto } from '../dto/update-module.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Module } from '../entities/module.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModulesService {
  constructor(
    @InjectRepository(Module)
    private modulesRepository: Repository<Module>,
  ) {}

  create(createModuleDto: CreateModuleDto) {
    const module = this.modulesRepository.create(createModuleDto);

    return this.modulesRepository.save(module);
  }

  findAll(take: number, skip: number) {
    return this.modulesRepository.findAndCount({
      take,
      skip,
      // relations: {
      //   roles: true,
      // },
    });
  }

  findOne(id: number) {
    return this.modulesRepository.findOne({
      where: { id },
      relations: {
        roles: true,
      },
    });
  }

  update(id: number, updateModuleDto: UpdateModuleDto) {
    return this.modulesRepository.update(id, updateModuleDto);
  }

  remove(id: number) {
    return this.modulesRepository.delete(id);
  }
}
