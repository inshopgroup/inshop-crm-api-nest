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
import { ModulesService } from '../../services/modules.service';
import { CreateModuleDto } from '../../dto/create-module.dto';
import { UpdateModuleDto } from '../../dto/update-module.dto';
import { IdPipe } from '../../../core/transformers/id.pipe';
import { ObjectPipe } from '../../../core/transformers/parse-object.pipe';
import { Module as ModuleEntity } from '../../../permissions/entities/module.entity';

@Controller('admin/modules')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Post()
  create(@Body(ValidationPipe) createModuleDto: CreateModuleDto) {
    return this.modulesService.create(createModuleDto);
  }

  @Get()
  findAll() {
    return this.modulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ObjectPipe(ModuleEntity)) module: ModuleEntity) {
    return module;
  }

  @Patch(':id')
  async update(
    @Param('id', ObjectPipe(ModuleEntity)) module: ModuleEntity,
    @Body(IdPipe, ValidationPipe) updateModuleDto: UpdateModuleDto,
  ) {
    await this.modulesService.update(module.id, updateModuleDto);

    return;
  }

  @Delete(':id')
  async remove(@Param('id', ObjectPipe(ModuleEntity)) module: ModuleEntity) {
    await this.modulesService.remove(module.id);

    return;
  }
}
