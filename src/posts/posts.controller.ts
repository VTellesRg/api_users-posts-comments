import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('/api/v1/posts')
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get('/api/v1/posts')
  async findAll() {
    return this.postsService.findAll();
  }

  @Get('/api/v1/posts/:id')
  async findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Patch('/api/v1/posts/:id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete('/api/v1/posts/:id')
  async remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
