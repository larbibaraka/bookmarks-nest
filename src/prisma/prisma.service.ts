import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// create the logic that connects to DataBase
@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:postgres@localhost:5434/bookmarks?schema=public',
        },
      },
    });
  }
}
