import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from '../dto/create-group.dto';
import { UpdateGroupDto } from '../dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from '../entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>,
  ) {}

  create(createGroupDto: CreateGroupDto) {
    const group = this.groupsRepository.create(createGroupDto);

    return this.groupsRepository.save(group);
  }

  findAll() {
    return this.groupsRepository.find({
      relations: {
        roles: true,
      },
    });
  }

  findOne(id: number) {
    return this.groupsRepository.findOne({
      where: { id },
      relations: {
        roles: true,
      },
    });
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.groupsRepository.update(id, updateGroupDto);
  }

  remove(id: number) {
    return this.groupsRepository.delete(id);
  }
}
