import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':post_id')
  findOne(@Param('post_id') post_id: string) {
    return this.commentsService.findOne(+post_id);
  }

  @Patch(':post_id')
  update(@Param('post_id') post_id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+post_id, updateCommentDto);
  }

  @Delete(':post_id')
  remove(@Param('post_id') post_id: string) {
    return this.commentsService.remove(+post_id);
  }
}
