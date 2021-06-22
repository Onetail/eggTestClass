import { Context } from 'egg';

export async function validateAccountPostBody(
  ctx: Context,
  next: () => Promise<any>,
): Promise<any> {
  try {
    ctx.validate(
      {
        account: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
        nickname: {
          type: 'string?',
        },
      },
      ctx.request.body,
    );

    await next();
  } catch (e) {
    throw { status: 400, message: e };
  }
}
