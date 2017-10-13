module.exports = (sequelize, DataTypes) => {
  var Comments = sequelize.define('Comments', {
    reflection: DataTypes.STRING
  });

  Comments.associate = models => {
    models.Comments.belongsTo(models.Echos);
  }

  return Comments;
}