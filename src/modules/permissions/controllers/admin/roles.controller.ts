import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { RolesService } from '../../services/roles.service';
import { CreateRoleDto } from '../../dto/create-role.dto';
import { UpdateRoleDto } from '../../dto/update-role.dto';
import { IdPipe } from '../../../core/transformers/id.pipe';

@Controller('admin/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body(ValidationPipe) createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(IdPipe, ValidationPipe) updateRoleDto: UpdateRoleDto,
  ) {
    await this.rolesService.update(+id, updateRoleDto);

    return this.rolesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
