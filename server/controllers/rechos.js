const express = require('express');
const router = express.Router();
const models = require('../models');

const passport = require('../middlewares/authentication');
const RechosAlgorithm = require('../middlewares/rechosAlgorithm');

router.get('/', (req, res) => {
  if(req.user) {
    models.Rechos.findAll(
      {
        where: {ReceiverId: req.user.id},
        include: [ 
          { model: models.Echos ,
            include:[ models.Users]}
          
        ]
      }
    )
    .then(rechos => {
      res.json(rechos);


    }); 
  } 
});

// Get Rechos by its primary key
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