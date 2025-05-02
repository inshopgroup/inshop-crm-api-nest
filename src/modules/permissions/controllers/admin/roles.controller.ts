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
} from '@nestjs/common';
import { RolesService } from '../../services/roles.service';
import { CreateRoleDto } from '../../dto/create-role.dto';
import { UpdateRoleDto } from '../../dto/update-role.dto';
import { IdPipe } from '../../../core/transformers/id.pipe';
import { ObjectPipe } from '../../../core/transformers/parse-object.pipe';
import { Role } from '../../entities/role.entity';

@Controller('admin/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body(ValidationPipe) createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  findAll(
    @Param('take', new DefaultValuePipe(30), new ParseIntPipe()) take: number,
    @Param('skip', new DefaultValuePipe(0), new ParseIntPipe()) skip: number,
  ) {
    return this.rolesService.findAll(take, skip);
  }

  @Get(':id')
  findOne(@Param('id', ObjectPipe(Role)) role: Role) {
    return role;
  }

  @Patch(':id')
  async update(
    @Param('id', ObjectPipe(Role)) role: Role,
    @Body(IdPipe, ValidationPipe) updateRoleDto: UpdateRoleDto,
  ) {
    await this.rolesService.update(role.id, updateRoleDto);

    return;
  }

  @Delete(':id')
  async remove(@Param('id', ObjectPipe(Role)) role: Role) {
    await this.rolesService.remove(role.id);

    return;
  }
}
