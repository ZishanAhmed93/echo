const express = require('express');
const router = express.Router();

router.use('/', require('./home'));
router.use('/', require('./users'));
router.use('/echos', require('./echos'));
router.use('/auth', require('./auth'));

module.exports = router;
