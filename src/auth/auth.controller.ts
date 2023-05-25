import { AuthService } from './auth.service';
import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @HttpCode(HttpStatus.OK)
    @Post('/api/v1/users/login')
    async login(@Body() signInDto: SignInDto) {
        return this.authService.signin(signInDto.email, signInDto.password);
    }
}
