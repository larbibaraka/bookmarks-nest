import { Injectable } from '@nestjs/common';
import { AuthDto } from 'src/dto';
import { PrismaService } from 'src/prisma/prisma.service';

import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signin() {
    return 'sign in!!';
  }

  signup({ email, password }: AuthDto) {
    return 'sign up!!';
  }
}
