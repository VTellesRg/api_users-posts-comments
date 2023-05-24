import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    return user.save();
    // return 'This action adds a new user';
  }

  findAll() {
    return this.userModel.find();
    // return `This action returns all users`;
  }

  findOne(id: string) {
    return this.userModel.findById(id);
    // return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(
      {_id: id,},
      { updateUserDto,},
      { new: true,})
    // return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return this.userModel.deleteOne({_id: id,}).exec();
    // return `This action removes a #${id} user`;
  }
}
