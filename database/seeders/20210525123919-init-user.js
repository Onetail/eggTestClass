'use strict';

const tableName = 'users';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      tableName,
      [
        {
          id: 1,
          nickname: 'WayneChu',
          email: 'test@gmail.com',
          password: '123456',
          levelId: 1,
        },
        {
          id: 2,
          nickname: 'TUT',
          email: 'tut@gmail.com',
          password: '123456',
          levelId: 2,
        },
        {
          id: 3,
          nickname: 'test',
          email: 'test2@gmail.com',
          password: '123456',
          levelId: 2,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  },
};
