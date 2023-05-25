import {
    Injectable,
    BadRequestException,
    NotFoundException,
    UnauthorizedException,
  } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';  

@Injectable()
export class AuthService {
        constructor(
            private usersService: UsersService,
            private jwtService: JwtService
            ) {}

        async signup(email: string) {
            // See if email is in use
            const users = await this.usersService.findAll();
            const user = users.find((user) => user.email === email);
            if (user) {
                throw new BadRequestException('Email in use');
            }    
            return user;

        }
        async signin(email: string, pass: string) {
            const user = await this.usersService.findOne(email);

            if (user?.password !== pass) {
                throw new UnauthorizedException('Invalid credentials');
            }
            const payload = { email: user.email, sub: user.id };
            return {
                access_token: this.jwtService.sign(payload),
            };
        }
    
    }