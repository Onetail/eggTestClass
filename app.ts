// app.ts
import { Application, IBoot } from 'egg';

export default class FooBoot implements IBoot {
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  configWillLoad() {}

  configDidLoad() {
    // Config, plugin files have loaded.
  }

  async didLoad() {
    // All files have loaded, start plugin here.
  }

  async willReady() {
    // All plugins have started, can do some thing before app ready.
  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
    await this.app.redis.flushall();
    const ctx = await this.app.createAnonymousContext();

    // for (let i = 0; i < 10000; i++) {
    //   await ctx.service.user.createNew({
    //     email: `test${i}@gmail.com`,
    //     nickname: `test${i}`,
    //     password: '123456',
    //     levelId: 1,
    //   });
    // }
    const userCount = await ctx.service.user.countUserAll();
    await this.app.redis.set(
      `${this.app.config.redisSet.keys.userCount}`,
      userCount,
    );
  }

  async serverDidReady() {
    // Server is listening.
  }

  async beforeClose() {
    // Do some thing before app close.
  }
}
