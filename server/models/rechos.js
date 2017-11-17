module.exports = (sequelize, DataTypes) => {
  var Rechos = sequelize.define('Rechos');

  Rechos.associate = models => {
    models.Rechos.belongsTo(models.Users, {
      foreignKey: { name: 'SenderId', allowNull: false },
      as: 'SentEchos',
    });

    models.Rechos.belongsTo(models.Users, {
      foreignKey: { name: 'ReceiverId', allowNull: false },
      as: 'ReceivedEchos',
    });

    models.Rechos.belongsTo(models.Echos, {
      foreignKey: { name: 'EchoId', allowNull: false },
    });
  }

  return Rechos;
};
