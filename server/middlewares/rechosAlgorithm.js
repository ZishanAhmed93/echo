const express = require('express');
const router = express.Router();
const models = require('../models');

const passport = require('../middlewares/authentication');

function RechosAlgorithm(echoId, senderId, res) {
  models.Echos.findById(parseInt(echoId))
    .then(echo => {
      let echoOwnerId = echo.dataValues.UserId;

      models.Users.findAll()
        .then(users => {
          // retrieve only user id and filter it so it doesn't container the sender's id; prevent from
          // sending echos to oneself.
          let receiverIds = users.map(user => user.dataValues.id).filter(id => {
            return id !== senderId && id !== echoOwnerId;
          });
          
          // randomize receivers for now
          receiverIds = ShuffleArray(receiverIds);

          // return only the first 6 user id
          const limit = 6;
          if(receiverIds.length > limit) {
            receiverIds = receiverIds.slice(0, limit);
          }
          
          return receiverIds;
        })
        .then(receiverIds => {
          let rechos = [];

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
            .then(recho => {
              rechos.push(recho);
            })
            .catch(err => {
              // do something
            });
          });

          return rechos;
        })
        .then(rechos => {
          res.sendStatus(200);
        })
        .catch(err => {
          res.sendStatus(400);
        });
    })
}

function ShuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

module.exports = RechosAlgorithm;