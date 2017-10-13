module.exports = (sequelize, DataTypes) => {
  var Posts = sequelize.define('Posts', {
    subject: DataTypes.STRING
  });

  Posts.associate = models => {
    models.Posts.hasMany(models.Comments);
  }

  return Posts;
};
