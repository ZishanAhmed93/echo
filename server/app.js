const bodyParser = require('body-parser');
const express = require('express');
const models = require('./models');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const expressSession = require('express-session');
const passport = require('./middlewares/authentication');

// secret protects against fake cookie. 
// In practice you want a random string to be your secret.
app.use(expressSession(({
  secret: `${process.env.Express_Session_Secret}`,
  resave: false,
  saveUninitialized: true
})));
app.use(passport.initialize());
app.use(passport.session());


// Load up all of the controllers
const controllers = require('./controllers/index');
app.use('/', controllers);

// Production Build
app.use(express.static(`${__dirname}/../client/build`));

// First, make sure the Database tables and models are in sync
// then, start up the server and start listening.

const resetDatabase = false;
const PopulateDatabase = require('./middlewares/faker');

models.sequelize.sync({force: resetDatabase})

  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`);

      if(resetDatabase) {
        PopulateDatabase();
      }
    });
  });
