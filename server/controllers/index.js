const express = require('express');
const router = express.Router();

router.use('/', require('./home'));
router.use('/echos', require('./echos'));

module.exports = router;
