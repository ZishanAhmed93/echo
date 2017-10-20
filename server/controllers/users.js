const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');

const router = express.Router();

router.get('/register', passport.redirectIfLoggedIn('/profile'), (req, res) => {
  // Should redirect to register page
  res.redirect('/');
});

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
        username: req.body.username,
        email: req.body.email,
        hashed_password: req.body.password
      })
      .then(user => {
        req.login(user, () => {
          res.redirect('/profile');
        });
      });
    }
  });
});

router.get('/login', passport.redirectIfLoggedIn('/profile'), (req, res) => {
  // Should redirect to login page
  res.redirect('/');
});

router.post('/login', (req, res) => {
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
  })(req, res);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
})

// Only allow access to logged in users
// passport.redirectIfNotLoggedIn can be used at application level 
// by using router.use() at the top of the file.
router.get('/profile', passport.redirectIfNotLoggedIn('/login'), (req, res) => {
  res.send('Welcome to your profile');
});

module.exports = router;
