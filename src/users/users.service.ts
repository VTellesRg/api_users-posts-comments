import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    return user.save();
    // return 'This action adds a new user';
  }

  async findAll() {
    const users = await this.userModel.find();
    // console.log(users);
    return users;
    // return `This action returns all users`;
  }

  async findOneById(id: string) {
    const user = await this.userModel.findById(id);
    return user;
    // return `This action returns a #${id} user`;
  }
  
  async findOne(email: string) {
    const user = await this.userModel.findOne({email});
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = await this.userModel.findByIdAndUpdate(
      {_id: id,},
      { $set: updateUserDto,},
      { new: true,})
    return updateUser;
    // return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    const removeUser = await this.userModel.findByIdAndRemove({_id: id,}).exec();
    return removeUser;
    // return `This action removes a #${id} user`;
  }
}
