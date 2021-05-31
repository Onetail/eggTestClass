import { Service } from 'egg';

export default class Level extends Service {
  async deleteAllLevel() {
    return await this.ctx.model.Level.destroy({ where: {} });
  }
}
