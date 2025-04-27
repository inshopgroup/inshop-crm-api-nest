import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { GroupsService } from '../../services/groups.service';
import { CreateGroupDto } from '../../dto/create-group.dto';
import { UpdateGroupDto } from '../../dto/update-group.dto';
import { IdPipe } from '../../../core/transformers/id.pipe';

@Controller('admin/groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(@Body(ValidationPipe) createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(IdPipe, ValidationPipe) updateGroupDto: UpdateGroupDto,
  ) {
    await this.groupsService.update(+id, updateGroupDto);

    return this.groupsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsService.remove(+id);
  }
}
