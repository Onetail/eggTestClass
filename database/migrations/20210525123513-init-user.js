'use strict';
const tableName = 'users';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DATE, INTEGER, STRING } = Sequelize;
    await queryInterface.createTable(
      tableName,
      {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        levelId: {
          type: INTEGER,
          allowNull: false,
          references: {
            model: 'levels',
            key: 'id',
          },
        },
        email: { type: STRING, allowNull: false },
        password: { type: STRING(64), allowNull: false },
        nickname: { type: STRING, allowNull: true },
        createdAt: { type: DATE, defaultValue: Sequelize.literal('NOW()') },
        updatedAt: {
          type: DATE,
          defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()'),
        },
      },
      {
        charset: 'utf8', // default: null
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  },
};
