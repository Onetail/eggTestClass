import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1621337850279_1052';

  // add your egg config in here
  config.middleware = ['renderJson'];

  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'egg-swagger',
      description: 'swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    enableSecurity: false,
    // enableValidate: true,
    routerMap: false,
    enable: true,
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['http://localhost:7001'],
  };

  config.static = {
    prefix: '/html',
    dir: [
      path.join(appInfo.baseDir, 'app/public'),
      {
        prefix: '/coverage',
        dir: path.join(appInfo.baseDir, 'coverage/lcov-report'),
      },
    ],
    dynamic: true,
    preload: false,
    maxAge: 31536000,
    buffer: true, // in prod env, false in other envs
  };

  config.jwt = {
    secret: '123456',
  };

  config.redisSet = {
    INCR: 1,
    DECR: 1,
    keys: {
      userCount: 'userCount',
    },
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
