import { Controller } from 'egg';
import { SignInBodyRequest } from './dto/account';

export default class AccountController extends Controller {
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

    ctx.body = { token: token };
  }
}
