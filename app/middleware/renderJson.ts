import { Context } from 'egg';

export default () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    ctx.set('Content-Type', 'application/json');
    await next();
  };
};
