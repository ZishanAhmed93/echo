const express = require('express');
const router = express.Router();
const models = require('../models');

const passport = require('../middlewares/authentication');
const RechosAlgorithm = require('../middlewares/rechosAlgorithm');

// don't use this 'GET' routing
router.get('/', (req, res) => {
  models.Rechos.findAll(
    // There is a bug with include where it fetches all Echos with the same EchoId, 
    // instead of just matching where condition.
    // {
    //   include: [ { model: models.Users, as: 'SentEchos' }, 
    //              { model: models.Users, as: 'ReceivedEchos' }, 
    //              { model: models.Echos } 
    //            ]
    // },
    {
      where: {ReceiverId: req.user.id}
    }
  )
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
  RechosAlgorithm(req.body.echoId, req.user.id, res);
});

module.exports = router;