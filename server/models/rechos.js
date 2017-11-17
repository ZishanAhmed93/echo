module.exports = (sequelize, DataTypes) => {
  var Rechos = sequelize.define('Rechos');

  Rechos.associate = models => {
    models.Rechos.belongsTo(models.Users, {
      foreignKey: 'SenderId',
      as: 'SentEchos',
    });

    models.Rechos.belongsTo(models.Users, {
      foreignKey: 'ReceiverId',
      as: 'ReceivedEchos',
    });

    models.Rechos.belongsTo(models.Echos, {
      foreignKey: 'EchoId',
    });
  }

  return Rechos;
};
