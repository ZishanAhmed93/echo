module.exports = (sequelize, DataTypes) => {
  var Echos = sequelize.define('Echos', {
    subject: { type: DataTypes.STRING, allowNull: false },
    echo_point: { type: DataTypes.INTEGER, defaultValue: 0 },
  });

  Echos.associate = models => {
    models.Echos.belongsTo(models.Users, {
      foreignKey: { name: 'UserId', allowNull: false },
      onDelete: 'cascade'
    });

    models.Echos.hasMany(models.Rechos, {
      as: 'Echos',
      foreignKey: 'EchoId',
    });
  }

  return Echos;
};
