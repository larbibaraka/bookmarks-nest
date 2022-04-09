import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from 'src/dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: AuthDto) {
    // console.log(body)
    return this.authService.signup(body);
  }

  @Post('signin')
  signin(@Body() body: AuthDto) {
    return this.authService.signin(body);
  }
}
