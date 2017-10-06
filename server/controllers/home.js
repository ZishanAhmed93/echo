const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
  res.send("Welcome");
});

module.exports = router;
