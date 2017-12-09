const bodyParser = require('body-parser');
const express = require('express');
const models = require('./models');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Production Build
app.use(express.static(`../client/build`));

const expressSession = require('express-session');
const passport = require('./middlewares/authentication');

// secret protects against fake cookie. 
// In practice you want a random string to be your secret.
app.use(expressSession(({
  secret: 'echoproject',
  resave: false,
  saveUninitialized: true
})));
app.use(passport.initialize());
app.use(passport.session());


// Load up all of the controllers
const controllers = require('./controllers/index');
app.use('/', controllers);


// First, make sure the Database tables and models are in sync
// then, start up the server and start listening.

const resetDatabase = false;
const PopulateDatabase = require('./middlewares/faker');

models.sequelize.sync({force: resetData})

  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`);

      if(resetData) {
        PopulateDatabase();
      }
    });
  });
