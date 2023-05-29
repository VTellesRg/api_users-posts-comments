import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller()
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Post('/api/v1/comments')
  async create(@Body() createCommentDto: CreateCommentDto) {
    const createComment = await this.commentsService.create(createCommentDto);
    if(createComment !== createCommentDto) throw new Error('400: invalid input, comment not created or updated')
    return createComment;
  }

  @Get('/api/v1/posts/:id/comments')
  async findAll() {
    const findAllCommentsOfPost = this.commentsService.findAll();
    return findAllCommentsOfPost;
  }
  @Get('/api/v1/comments')
  async findAllComments() {
    const findAllComments = this.commentsService.findAll();
    return findAllComments;
  }

  @Get('/api/v1/posts/:id/comments/:comment_id')
  async findOne(@Param('comment_id') comment_id: string) {
    const findOneComment = this.commentsService.findOne(comment_id);
    return findOneComment;
  }

  @Put('/api/v1/posts/:id/comments/:comment_id')
  async update(@Param('comment_id') comment_id: string, @Body() updateCommentDto: UpdateCommentDto) {
    if(!this.commentsService.findOne(comment_id)) throw new Error('404: invalid input, comment not found')
    const updateComment = this.commentsService.update(comment_id, updateCommentDto);
    return updateComment;
  }

  @Delete('/api/v1/posts/:id/comments/:comment_id')
  async remove(@Param('comment_id') comment_id: string) {
    if(!this.commentsService.findOne(comment_id)) throw new Error('404: invalid input, comment not found')
    const deleteComment = this.commentsService.remove(comment_id);
    return deleteComment;
  }
}
