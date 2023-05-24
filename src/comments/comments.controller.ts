import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller()
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('/api/v1/posts/:id/comments')
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get('/api/v1/posts/:id/comments')
  findAll() {
    return this.commentsService.findAll();
  }

  @Get('/api/v1/posts/:id/comments/:comment_id')
  findOne(@Param('comment_id') comment_id: string) {
    return this.commentsService.findOne(comment_id);
  }

  @Patch('/api/v1/posts/:id/comments/:comment_id')
  update(@Param('comment_id') comment_id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(comment_id, updateCommentDto);
  }

  @Delete('/api/v1/posts/:id/comments/:comment_id')
  remove(@Param('comment_id') comment_id: string) {
    return this.commentsService.remove(comment_id);
  }
}
