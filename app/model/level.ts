module.exports = (app) => {
  const { INTEGER, DATE, STRING } = app.Sequelize;

  const Level = app.model.define('levels', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING, allowNull: false },
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
  Level.associate = () => {
    app.model.Level.hasMany(app.model.User, {
      foreignKey: 'levelId',
    });
  };
  return Level;
};
