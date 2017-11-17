module.exports = (sequelize, DataTypes) => {
  var Echos = sequelize.define('Echos', {
    subject: DataTypes.STRING,
    
  });

  Echos.associate = models => {
    models.Echos.hasMany(models.Comments);
    models.Echos.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'cascade'
    });
  }



  return Echos;
};
