import { Service } from 'egg';

const UserAttributes = ['id', 'email', 'createdAt'];
const LevelAttributes = ['name'];
export default class User extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async findOneByUserId(id: number) {
    return await this.ctx.model.User.findOne({
      attributes: UserAttributes,
      where: { id },
      include: {
        model: this.ctx.model.Level,
        attributes: LevelAttributes,
      },
    });
  }

  public async updateOneByUserId(
    id: number,
    { email, nickname }: { email: string; nickname: string },
  ) {
    const result = await this.ctx.model.User.update(
      { email, nickname },
      {
        where: { id },
      },
    );
    return result[0];
  }

  public async createNew({
    email,
    nickname,
    password,
    levelId,
  }: {
    email: string;
    nickname: string;
    password: string;
    levelId: number;
  }) {
    return await this.ctx.model.User.create({
      email,
      nickname,
      password,
      levelId,
    });
  }

  public async deleteOneByUserId(id: number) {
    const result = await this.ctx.model.User.destroy({
      where: { id },
    });

    return result;
  }

  async deleteAllUser() {
    return await this.ctx.model.User.destroy({ where: {} });
  }
}
