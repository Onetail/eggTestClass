import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;

  router.post(
    '/account/signin',
    middleware.validateParams.validateAccountPostBody,
    controller.account.signIn,
  );
};
