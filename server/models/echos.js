module.exports = (sequelize, DataTypes) => {
  var Echos = sequelize.define('Echos', {
    subject: DataTypes.STRING
  });

  Echos.associate = models => {
    models.Echos.hasMany(models.Comments);
  }

  return Echos;
};
