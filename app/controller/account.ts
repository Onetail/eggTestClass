import { Controller } from 'egg';
import { SignInBodyRequest } from './dto/account';

export default class AccountController extends Controller {
  public async signInCount() {
    const { ctx } = this;

    const mins = await ctx.app.redis.get(`1mins`);
    const tenMins = await ctx.app.redis.get(`10mins`);

    ctx.body = { mins, tenMins };
  }

  public async signIn() {
    const { ctx } = this;
    const data: SignInBodyRequest = ctx.request.body;
    const { account, password, nickname } = data;

    const token = ctx.app.jwt.sign(
      {
        account: account,
        password,
        nickname,
      },
      ctx.app.config.jwt.secret,
    );

    const mins = await ctx.app.redis.get(`1mins`);

    if (mins) {
      await ctx.app.redis.incr(`1mins`);
    } else {
      await ctx.app.redis.set(`1mins`, 1, 'ex', 60);
    }

    const tenMins = await ctx.app.redis.get(`10mins`);
    if (tenMins) {
      await ctx.app.redis.incr(`10mins`);
    } else {
      await ctx.app.redis.set(`10mins`, 1, 'ex', 600);
    }

    ctx.body = { token: token };
  }
}
