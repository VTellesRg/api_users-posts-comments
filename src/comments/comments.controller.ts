import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller()
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Post('/api/v1/posts/:id/comments')
  create(@Body() createCommentDto: CreateCommentDto) {
    const createComment = this.commentsService.create(createCommentDto);
    return createComment;
  }

  @Get('/api/v1/posts/:id/comments')
  findAll() {
    const findAllComments = this.commentsService.findAll();
    return findAllComments;
  }

  @Get('/api/v1/posts/:id/comments/:comment_id')
  findOne(@Param('comment_id') comment_id: string) {
    const findOneComment = this.commentsService.findOne(comment_id);
    return findOneComment;
  }

  @Put('/api/v1/posts/:id/comments/:comment_id')
  update(@Param('comment_id') comment_id: string, @Body() updateCommentDto: UpdateCommentDto) {
    const updateComment = this.commentsService.update(comment_id, updateCommentDto);
    return updateComment;
  }

  @Delete('/api/v1/posts/:id/comments/:comment_id')
  remove(@Param('comment_id') comment_id: string) {
    const deleteComment = this.commentsService.remove(comment_id);
    return deleteComment;
  }
}
