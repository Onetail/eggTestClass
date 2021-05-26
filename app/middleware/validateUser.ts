import { Context } from 'egg';

export async function validateIdParams(
  ctx: Context,
  next: () => Promise<any>,
): Promise<any> {
  try {
    ctx.validate(
      {
        id: {
          type: 'string',
        },
      },
      ctx.params,
    );

    await next();
  } catch (e) {
    throw e;
  }
}

export async function validateUserPostBody(
  ctx: Context,
  next: () => Promise<any>,
): Promise<any> {
  try {
    ctx.validate(
      {
        email: {
          type: 'string',
        },
        nickname: {
          type: 'string?',
        },
        password: {
          type: 'string',
        },
        levelId: {
          type: 'number',
        },
      },
      ctx.request.body,
    );

    await next();
  } catch (e) {
    throw e;
  }
}

export async function validateUserPatchBody(
  ctx: Context,
  next: () => Promise<any>,
): Promise<any> {
  try {
    ctx.validate(
      {
        nickname: {
          type: 'string?',
        },
        email: {
          type: 'string?',
        },
      },
      ctx.request.body,
    );

    await next();
  } catch (e) {
    throw e;
  }
}
