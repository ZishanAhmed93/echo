const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = (sequelize, DataTypes) => {
  // define() takes a table name and a set of columns
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING,
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    hashed_password: DataTypes.STRING,
    level: DataTypes.INTEGER,
    experience: DataTypes.INTEGER,
  });

  Users.associate = models => {
    models.Users.hasMany(models.Echos);
  }

  // It should check for existing user before creating.
  Users.beforeCreate(user =>
    new sequelize.Promise(resolve => {
      bcrypt.hash(user.hashed_password, saltRounds)
        .then(hashedPassword => {
          resolve(hashedPassword);
        });
    })
    .then(hashedPassword => {
      user.hashed_password = hashedPassword;
    })
  );  

  return Users;
}