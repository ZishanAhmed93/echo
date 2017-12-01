const express = require('express');
const router = express.Router();
const models = require('../models');
const passport = require('../middlewares/authentication');

router.get('/', (req, res) => {
  if(req.user) {
    const userId = req.user.id;

    models.Users.findOne({
      where: {
        id: userId
      }
    })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.sendStatus(400);
    });  
  } else {
    res.sendStatus(401);
  }
})


module.exports = router;