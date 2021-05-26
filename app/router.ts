import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;

  router.post(
    '/account/signin',
    middleware.validateParams.validateAccountPostBody,
    controller.account.signIn,
  );

  router.get(
    '/user/:id',
    middleware.validateUser.validateIdParams,
    controller.user.getUserById,
  );
  router.post(
    '/user/',
    middleware.validateUser.validateUserPostBody,
    controller.user.postUser,
  );
  router.patch(
    '/user/:id',
    middleware.validateUser.validateIdParams,
    middleware.validateUser.validateUserPatchBody,
    controller.user.patchUserById,
  );
  router.delete(
    '/user/:id',
    middleware.validateUser.validateIdParams,
    controller.user.deleteUserById,
  );
};
