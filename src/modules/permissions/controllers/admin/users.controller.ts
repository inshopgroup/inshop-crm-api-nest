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
import { UsersService } from '../../services/users.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { IdPipe } from '../../../core/transformers/id.pipe';
import { ObjectPipe } from '../../../core/transformers/parse-object.pipe';
import { User } from '../../entities/user.entity';

@Controller('admin/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ObjectPipe(User, ['group'])) user: User) {
    return user;
  }

  @Patch(':id')
  async update(
    @Param('id', ObjectPipe(User)) user: User,
    @Body(IdPipe, ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    await this.usersService.update(user.id, updateUserDto);

    return;
  }

  @Delete(':id')
  async remove(@Param('id', ObjectPipe(User)) user: User) {
    await this.usersService.remove(user.id);

    return;
  }
}
