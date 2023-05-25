import {
    Injectable,
    BadRequestException,
    NotFoundException,
  } from '@nestjs/common';
  import { UsersService } from './users.service';
  import { randomBytes, scrypt as _scrypt } from 'crypto';
  import { promisify } from 'util';
@Injectable()
export class AuthService {
        constructor(private usersService: UsersService) {}
        async signup(email: string) {
            // See if email is in use
            const users = await this.usersService.findAll();
            const user = users.find((user) => user.email === email);
            if (user) {
                throw new BadRequestException('Email in use');
            }    
            return user;

        }
        async signin(email: string, password: string) {
            const users = await this.usersService.findAll();
            const user = users.find((user) => user.email === email);
            if (!user) {
                throw new NotFoundException('User not found');
            }
            const passwordMatch = user.password === password;
            if (!passwordMatch) {
                throw new BadRequestException('Invalid credentials');
            }
            return user;
        }
    
    }