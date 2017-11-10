const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');

const router = express.Router();

router.post('/register', (req, res) => {
  models.Users.findOne({
    where: {
      username: req.body.username,
      email: req.body.email
    }
  })
  .then(user => {
    if(user) {
      res.send('User name or email is already taken');
    }
    else {
      models.Users.create({
        email: req.body.email,
        fullname: req.body.fullname,
        username: req.body.username,
        hashed_password: req.body.password,
      })
      .then(user => {
        req.login(user, () => {
          res.sendStatus(200);
        });
      });
    }
  });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
  console.log("LOGGEDOUT")
})

router.get('/auth', (req, res) => {
  // If user is logged in, then req.user returns the user object
  if(req.user) {
    res.sendStatus(200);
  }
  else {
    res.sendStatus(401);
  }
}); 


module.exports = router;
