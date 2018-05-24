const express = require('express');
const router = express.Router();

const women = require('./women');
const details = require('./details');

router.get('/', women.get);
router.get('/details', details.get);
router.get('/details/:id', details.get);

module.exports = router;
