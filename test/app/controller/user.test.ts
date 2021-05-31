import { app, mock } from 'egg-mock/bootstrap';

const userObject = {
  email: 'test@gmail.com',
  password: '123456',
  nickname: 'test',
  levelId: 1,
};

const testErrorObject = {
  email: 1,
  password: true,
  nickname: 'test',
  levelId: 1,
};

const testSuccessObject = {
  email: 'test2@gmail.com',
  password: '123456',
  nickname: 'test',
  levelId: 1,
};

let userId;

async function createUser(userData) {
  const ctx = app.mockContext();
  const result = await ctx.service.user.createNew(userData);
  return result.id;
}

mock.consoleLevel('NONE');
describe('test/app/controller/user.test.ts', () => {
  before(async () => {
    const ctx = app.mockContext();

    await ctx.service.user.deleteAllUser();

    userId = await createUser(userObject);
  });
  afterEach(mock.restore);

  describe(`GET /user/:id`, () => {
    it('400 params is string', async () => {
      const result = await app.httpRequest().get(`/user/:id`).expect(400);
      return result;
    });

    it('200 userId not found ', async () => {
      const result = await app.httpRequest().get(`/user/0`).expect(200);
      return result;
    });

    it('200 userId is exist', async () => {
      const result = await app.httpRequest().get(`/user/${userId}`).expect(200);
      return result;
    });
  });

  describe(`POST /user`, () => {
    it('400 no send data', async () => {
      const result = await app.httpRequest().post(`/user`).expect(400);
      return result;
    });

    it('400 send data error ', async () => {
      const result = await app
        .httpRequest()
        .post(`/user`)
        .send(testErrorObject)
        .expect(400);
      return result;
    });

    it('200 ok', async () => {
      const result = await app
        .httpRequest()
        .post(`/user`)
        .send(testSuccessObject)
        .expect(200);
      return result;
    });

    it('200 the same email ok', async () => {
      const result = await app
        .httpRequest()
        .post(`/user`)
        .send(testSuccessObject)
        .expect(200);
      return result;
    });
  });
});
