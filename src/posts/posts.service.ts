import { Injectable, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Posts, PostsDocument } from './entities/post.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {

  constructor(@InjectModel(Posts.name) private postsModel: Model<PostsDocument>) {}


  async create(createUserDto: CreatePostDto) {
    const user = new this.postsModel(createUserDto);
    return user.save();
    // return 'This action adds a new user';
  }

  async findAll() {
    return this.postsModel.find();
    // return `This action returns all users`;
  }

  async findOne(id: string) {
    return this.postsModel.findById(id);
    // return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserDto: UpdatePostDto) {
    return this.postsModel.findByIdAndUpdate(
      {_id: id,},
      { $set: updateUserDto,},
      { new: true,})
    // return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return this.postsModel.deleteOne({_id: id,}).exec();
    // return `This action removes a #${id} user`;
  }
}