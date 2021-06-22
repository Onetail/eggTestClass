import { Controller } from 'egg';
import { SignInBodyRequest } from './dto/account';
/**
 * @Controller account
 */
export default class AccountController extends Controller {
  /**
   * @Router GET /account/signin/count
   * @Response 200 signInCountResponse 計算登入次數
   */
  public async signInCount() {
    const { ctx } = this;

    const mins = +((await ctx.app.redis.get(`1mins`)) || 0);
    const tenMins = +((await ctx.app.redis.get(`10mins`)) || 0);

    ctx.body = { mins, tenMins };
  }

  /**
   * @Router POST /account/signin
   * @Request body accountSignIn body 計算登入次數
   * @Response 200 signInResponse 登入
   * @Response 400 badRequestResponse 參數錯誤
   */
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
