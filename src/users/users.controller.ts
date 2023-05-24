import { Controller, Get, Post, Body, Put, Param, Delete, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';
@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/api/v1/users')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseInterceptors(SerializeInterceptor)
  @Get('/api/v1/users')
  async findAll() {
    if(!this.usersService.findAll()) throw new Error('No users found');
    return this.usersService.findAll();
  }
  @UseInterceptors(SerializeInterceptor)
  @Get('/api/v1/users/:id')
  async findOne(@Param('id') id: string) {
    if(!this.usersService.findOne(id)) throw new Error(404 + 'No user found');
    return this.usersService.findOne(id);
  }

  @Put('/api/v1/users/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('/api/v1/users/:id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
