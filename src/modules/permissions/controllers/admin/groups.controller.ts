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
} from '@nestjs/common';
import { GroupsService } from '../../services/groups.service';
import { CreateGroupDto } from '../../dto/create-group.dto';
import { UpdateGroupDto } from '../../dto/update-group.dto';
import { IdPipe } from '../../../core/transformers/id.pipe';
import { ObjectPipe } from '../../../core/transformers/parse-object.pipe';
import { Group } from '../../entities/group.entity';
import { AuthAdminGuard } from '../../guards/authAdmin.guard';

@UseGuards(AuthAdminGuard)
@Controller('admin/groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(@Body(ValidationPipe) createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  @Get()
  findAll(
    @Param('take', new DefaultValuePipe(30), new ParseIntPipe()) take: number,
    @Param('skip', new DefaultValuePipe(0), new ParseIntPipe()) skip: number,
  ) {
    return this.groupsService.findAll(take, skip);
  }

  @Get(':id')
  findOne(@Param('id', ObjectPipe(Group, ['roles'])) group: Group) {
    return group;
  }

  @Patch(':id')
  async update(
    @Param('id', ObjectPipe(Group)) group: Group,
    @Body(IdPipe, ValidationPipe) updateGroupDto: UpdateGroupDto,
  ) {
    await this.groupsService.update(group.id, updateGroupDto);

    return;
  }

  @Delete(':id')
  async remove(@Param('id', ObjectPipe(Group)) group: Group) {
    await this.groupsService.remove(group.id);

    return;
  }
}
