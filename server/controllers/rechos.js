const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', (req, res) => {
  models.Rechos.findAll({include: [ { model: models.Users, as: 'SentEchos' }, { model: models.Users, as: 'ReceivedEchos' }, { model: models.Echos } ]})
    .then(rechos => {
      res.json(rechos);
    });  
});

router.get('/:id', (req, res) => {
  models.Rechos.findById(parseInt(req.params.id), {include: [ { model: models.Users, as: 'SentEchos' }, { model: models.Users, as: 'ReceivedEchos' }, { model: models.Echos } ]})
    .then(recho => {
      res.json(recho);
    });
});

router.post('/', (req, res) => {
  models.Rechos.create(
    {
      EchoId: req.body.echoId,
      SenderId: req.body.senderId,
      ReceiverId: req.body.receiverId,
    },
    {
      include: [ { model: models.Echos }, { model: models.Users } ]
    }
  )
  .then(recho => {
    res.json(recho);
  })
  .catch(err => {
    res.sendStatus(400);
  });
});

module.exports = router;