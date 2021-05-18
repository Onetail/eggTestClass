import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;

    const a = 1;

    console.log(a);
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
