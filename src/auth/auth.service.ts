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

  async signup({ email, password }: AuthDto) {
    const hash = await argon.hash(password);
    const user = await this.prisma.user.create({
      data: {
        email,
        hash,
      }
    });

    delete user.hash;
    return user;
  }
}
