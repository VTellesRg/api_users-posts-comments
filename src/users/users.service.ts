import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import moment from 'moment';
import { } from 'class-validator';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }


  async create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    if (await this.findOne(user.email)) {
      throw new Error('Email already in use');
    }
    else if (await this.findUser(user.user)) {
      throw new Error('Username already in use');
    }
    else if (await this.findBirthdate(user.birthdate)) {
      // not working dont know why
      let today = new Date().toISOString().slice(0, 10);
      let birthdate = user.birthdate;
      if (today === birthdate) {
        throw new Error('Invalid birthdate');
      }
      // let dateString1 = user.birthdate;
      // let dateString2 = new Date().toISOString().slice(0, 10);
      // function checkDates(dateString1: string, dateString2: string): any {

      //   let dateParts1: string[] = dateString1.split('-');
      //   let dateParts2: string[] = dateString2.split('-');

      //   let year1: number = parseInt(dateParts1[0], 10);
      //   let month1: number = parseInt(dateParts1[1], 10);
      //   let day1: number = parseInt(dateParts1[2], 10);

      //   let year2: number = parseInt(dateParts2[0], 10);
      //   let month2: number = parseInt(dateParts2[1], 10);
      //   let day2: number = parseInt(dateParts2[2], 10);

      //   if (year1 > year2) {
      //     throw new Error('Invalid year of birth date');
      //   }
      //   else if (year1 === year2 && month1 > month2) {
      //     throw new Error('Invalid month of birth date');
      //   }
      //   else if (year1 === year2 && month1 === month2 && day1 >= day2) {
      //     throw new Error('Invalid day of birth date');
      //   }

      // }
      // checkDates(dateString1, dateString2);
    }
    else {

      return user.save();
    }
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
  async findUser(user: string) {
    const User = await this.userModel.findOne({ user });
    return User;
  }

  async findOne(email: string) {
    const user = await this.userModel.findOne({ email });
    return user;
  }
  async findBirthdate(birthdate: string) {
    const birth = await this.userModel.findOne({ birthdate });
    return birth;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = await this.userModel.findByIdAndUpdate(
      { _id: id, },
      { $set: updateUserDto, },
      { new: true, })
    return updateUser;
    // return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    const removeUser = await this.userModel.findByIdAndRemove({ _id: id, }).exec();
    return removeUser;
    // return `This action removes a #${id} user`;
  }
}
