import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Post('/api/v1/posts')
  async create(@Body() createPostDto: CreatePostDto) {
    const createPosts = await this.postsService.create(createPostDto);
    return createPosts;
  }

  @Get('/api/v1/posts')
  async findAll() {
    const posts = (await this.postsService.findAll()).reverse();
    // console.log(posts);
    return posts;
  }

  @Get('/api/v1/posts/:id')
  async findOne(@Param('id') id: string) {
    const findPost = await this.postsService.findOne(id);
    return findPost;
  }

  @Put('/api/v1/posts/:id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    const updatePost = await this.postsService.update(id, updatePostDto);
    return await updatePost;
  }

  @Delete('/api/v1/posts/:id')
  async remove(@Param('id') id: string) {
    const deletePost = await this.postsService.remove(id);
    return await deletePost;
  }
}
