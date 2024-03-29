import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment, CommentDocument } from './entities/comment.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class CommentsService {

  constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}


  async create(createCommentDto: CreateCommentDto) {
    const comment = new this.commentModel(createCommentDto);
    return comment.save();
    // return 'This action adds a new user';
  }

  async findAll() {
    return this.commentModel.find();
    // return `This action returns all users`;
  }

  async findOne(id: string) {
    return this.commentModel.findById(id);
    // return `This action returns a #${id} user`;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    return this.commentModel.findByIdAndUpdate(
      {_id: id,},
      { $set: updateCommentDto,},
      { new: true,})
    // return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return this.commentModel.deleteOne({_id: id,}).exec();
    // return `This action removes a #${id} user`;
  }
}