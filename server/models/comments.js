module.exports = (sequelize, DataTypes) => {
  var Comments = sequelize.define('Comments', {
    reflection: DataTypes.STRING
  });

  Comments.associate = models => {
    models.Comments.belongsTo(models.Echos, {
      foreignKey: 'EchoId',
      onDelete: 'cascade'
    });

    models.Comments.belongsTo(models.Users, {
      foreignKey: 'UserId'
    });
  }

  return Comments;
}