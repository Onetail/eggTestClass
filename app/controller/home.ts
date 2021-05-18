import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;

    const a = 1;

    const b = 2;

    console.log(a, b);
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
