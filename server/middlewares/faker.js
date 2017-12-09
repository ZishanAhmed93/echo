const models = require('../models');
const faker = require('faker');

function PopulateDatabase() {
  const populateAmount = 100;

  // Populate Users tables
  for(let i = 0; i < populateAmount; i++) {
    let user = faker.helpers.contextualCard();

    models.Users.create({
      email: user.email,
      fullname: user.name,
      username: user.username,
      hashed_password: '1234',
      level: 1,
      experience: 0,
    });
  }

  // Populate Echos tables
  setTimeout(() => {
    for(let i = 0; i < populateAmount * 2; i++) {
      let userId = 0;
      while(userId === 0 || userId > populateAmount) {
        userId = parseInt(Math.random() * populateAmount + 1, 10);
      }

      models.Echos.create(
        {
          UserId: userId,
          subject: faker.lorem.lines(),
        },
        {
          include: [models.Users]
        }
      )
    }    
  }, populateAmount * 400);


  // Populate Rechos tables
  setTimeout(() => {
    let totalUsers = 0;

    models.Users.findAll({})
      .then(users => {
        totalUsers = users.map(user => user.dataValues.id).length;

        models.Echos.findAll({})
          .then(echos => {
            echos.forEach(echo => {
              let echoId = echo.dataValues.id;
              let senderId = echo.dataValues.UserId;
              let receiverIds = [];

              for(let i = 0; i < 6; i++) {
                let receiverId = parseInt(Math.random() * totalUsers + 1, 10);

                while(receiverId === senderId && receiverIds.includes(receiverId)) {
                  receiverId = parseInt(Math.random() * totalUsers + 1, 10);
                }

                receiverIds.push(receiverId);
              }

              receiverIds.forEach(receiverId => {
                models.Rechos.create(
                  {
                    EchoId: echoId,
                    SenderId: senderId,
                    ReceiverId: receiverId,
                  },
                  {
                    include: [ { model: models.Echos }, { model: models.Users, as: 'SentEchos' }, { model: models.Users, as: 'ReceivedEchos' } ]
                  }
                )
              });

            });
          });

      });
  }, populateAmount * 800);

}

module.exports = PopulateDatabase;