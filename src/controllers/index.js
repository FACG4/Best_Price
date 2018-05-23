const express = require('express');

const router = express.Router();

const categories = require('./categories');

router.get('/categories', categories.get);
module.exports = router;
