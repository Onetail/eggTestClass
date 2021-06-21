import { Context } from 'egg';

export default () => {
  return async (ctx: Context) => {
    ctx.set('Content-Type', 'application/json');
  };
};
