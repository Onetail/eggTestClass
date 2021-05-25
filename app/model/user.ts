module.exports = (app) => {
  const { INTEGER, DATE, STRING } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    levelId: { type: INTEGER, allowNull: false },
    email: { type: INTEGER, allowNull: false },
    password: { type: STRING(64), allowNull: false },
    nickname: { type: INTEGER, allowNull: true },
    createdAt: {
      allowNull: false,
      defaultValue: app.Sequelize.NOW,
      type: DATE,
    },
    updatedAt: {
      allowNull: false,
      defaultValue: app.Sequelize.NOW,
      type: DATE,
    },
  });
  User.associate = () => {
    app.model.User.belongsTo(app.model.Level, {
      foreignKey: 'levelId',
      targetKey: 'id',
    });
  };
  return User;
};
