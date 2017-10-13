module.exports = (sequelize, DataTypes) => {
  var Comments = sequelize.define('Comments', {
    body: DataTypes.STRING
  });

  Comments.associate = models => {
    models.Comments.belongsTo(models.Posts);
  }

  return Comments;
}