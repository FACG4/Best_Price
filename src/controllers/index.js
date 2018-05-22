const express = require('express');
const router = express.Router();

const women = require('./women')

router.get('/', women.get)

module.exports = router;
