import { Controller } from 'egg';

export default class UserController extends Controller {
  public async getUserCount() {
    const { ctx } = this;
    ctx.body = { body: await ctx.service.user.countUserAll() };
  }
  public async getUserCountUseCache() {
    const { ctx, app } = this;
    let result;
    const userCount: string | null = await app.redis.get(
      `${this.app.config.redisSet.keys.userCount}`,
    );

    if (!userCount) {
      result = await ctx.service.user.countUserAll();
      await app.redis.set(`${this.app.config.redisSet.keys.userCount}`, result);
    } else {
      result = +userCount;
    }

    ctx.body = { body: result };
  }

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
