import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1621337850279_1052';

  // add your egg config in here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['http://localhost:7001'],
  };

  config.static = {
    prefix: '/',
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
