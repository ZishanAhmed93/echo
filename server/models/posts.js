module.exports = (sequelize, DataTypes) => {
  var Posts = sequelize.define('Posts', {
    body: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // models.Posts.hasMany(models.Choices);
      }
    }
  });
  return Posts;
};
