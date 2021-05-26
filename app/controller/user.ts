import { Controller } from 'egg';

export default class UserController extends Controller {
  public async getUserById() {
    const { ctx } = this;
    const { id } = ctx.params;

    ctx.body = { body: await ctx.service.user.findOneByUserId(id) };
  }
  public async postUser() {
    const { ctx } = this;
    const { email, nickname, password, levelId } = ctx.request.body;

    ctx.body = {
      body: await ctx.service.user.createNew({
        email,
        nickname,
        password,
        levelId,
      }),
    };
  }
  public async patchUserById() {
    const { ctx } = this;
    const { id } = ctx.params;
    const { email, nickname } = ctx.request.body;

    ctx.body = {
      body: await ctx.service.user.updateOneByUserId(id, {
        email,
        nickname,
      }),
    };
  }
  public async deleteUserById() {
    const { ctx } = this;
    const { id } = ctx.params;

    ctx.body = { body: await ctx.service.user.deleteOneByUserId(id) };
  }
}
