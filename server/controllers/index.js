const express = require('express');
const router = express.Router();

router.use('/', require('./home'));
router.use('/', require('./users'));
router.use('/echos', require('./echos'));
router.use('/rechos', require('./rechos'));

module.exports = router;
