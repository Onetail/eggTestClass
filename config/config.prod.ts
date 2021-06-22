import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.redis = {
    client: {
      port: 6379, // Redis port
      host: process.env.REDIS_HOST, // Redis host
      password: 'auth',
      db: 0,
    },
  };
  config.sequelize = {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST,
    port: 3306,
    database: process.env.MYSQL_DATABASE || 'test-dev',
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    define: {
      // model的全局配置
      timestamps: false, // 添加create,update,delete时间戳
      paranoid: true, // 添加软删除
      freezeTableName: true, // 防止修改表名为复数
      underscored: false, // 防止驼峰式字段被默认转为下划线
    },
    timezone: '+08:00',
  };

  return config;
};
