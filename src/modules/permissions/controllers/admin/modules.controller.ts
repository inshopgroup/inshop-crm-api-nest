import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  DefaultValuePipe,
  ParseIntPipe,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ModulesService } from '../../services/modules.service';
import { CreateModuleDto } from '../../dto/create-module.dto';
import { UpdateModuleDto } from '../../dto/update-module.dto';
import { IdPipe } from '../../../core/transformers/id.pipe';
import { ObjectPipe } from '../../../core/transformers/parse-object.pipe';
import { Module as ModuleEntity } from '../../../permissions/entities/module.entity';
import { AuthAdminGuard } from '../../guards/authAdmin.guard';

@UseGuards(AuthAdminGuard)
@Controller('admin/modules')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Post()
  create(@Body(ValidationPipe) createModuleDto: CreateModuleDto) {
    return this.modulesService.create(createModuleDto);
  }

  @Get()
  findAll(
    @Query('take', new DefaultValuePipe(30), new ParseIntPipe()) take: number,
    @Query('skip', new DefaultValuePipe(0), new ParseIntPipe()) skip: number,
  ) {
    return this.modulesService.findAll(take, skip);
  }

  @Get(':id')
  findOne(
    @Param('id', ObjectPipe(ModuleEntity, ['roles'])) module: ModuleEntity,
  ) {
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
