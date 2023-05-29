import { Controller, Get, Post, Body, Put, Param, Delete, UseInterceptors, ClassSerializerInterceptor, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';
@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseInterceptors(SerializeInterceptor) 
  @Post('/api/v1/users')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @UseInterceptors(SerializeInterceptor)
  @Get('/api/v1/users')
  async findAll() {
    if(!this.usersService.findAll()) throw new Error('No users found');
    return await this.usersService.findAll();
  }
  @UseInterceptors(SerializeInterceptor)
  @Get('/api/v1/users/:id')
  async findOneById(@Param('id') id: string) {
    const user = await this.usersService.findOneById(id);
    if(!user) throw new NotFoundException('No user found');
    return await user;
  }
  
  @UseInterceptors(SerializeInterceptor)
  @Get('/api/v1/users/email/:email')
  async findOneByEmail(@Param('email') email: string) {
    const user = await this.usersService.findOne(email);
    if(!user) throw new NotFoundException('No user found');
    return await user;
  }


  @Put('/api/v1/users/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete('/api/v1/users/:id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }
}
