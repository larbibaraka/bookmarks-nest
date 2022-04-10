import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    // if any specification like i want to get only the id of user
    if (data) {
      return request.user[data];
    }
    return request.user;
  },
);
