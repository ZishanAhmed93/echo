const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = (sequelize, DataTypes) => {
  // define() takes a table name and a set of columns
  const Users = sequelize.define('Users', {
    email: { type: DataTypes.STRING, allowNull: false },
    fullname: DataTypes.STRING,
    username: { type: DataTypes.STRING, allowNull: false },
    hashed_password: { type: DataTypes.STRING, allowNull: false },
    level: { type: DataTypes.INTEGER, defaultValue: 0 },
    experience: { type: DataTypes.INTEGER, defaultValue: 0 },

  });

  Users.associate = models => {
    models.Users.hasMany(models.Echos);

    models.Users.hasMany(models.Rechos, {
      as: 'SentEchos',
      foreignKey: 'SenderId',
    });

    models.Users.hasMany(models.Rechos, {
      as: 'ReceivedEchos',
      foreignKey: 'ReceiverId',
    });
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