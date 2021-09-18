import { AppContext } from "../app";
import * as Koa from 'koa';
import { } from 'koa-joi-router';
  
export default async (ctx: Koa.Context, next: () => Promise<void>): Promise<void> => {
  try {
    await next();
  } catch (err: any) {
    console.log(err);
    if (err.isJoi) {
      ctx.body = { error: err.message, type: 'VALIDATION_ERROR' };
      ctx.status = 422;
      return;
    }
    ctx.throw(err.status || 500, err.message);
  }
};