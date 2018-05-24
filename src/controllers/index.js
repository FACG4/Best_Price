const express = require('express');
const router = express.Router();
const categories = require('./categories');
const women = require('./women')

router.get('categories/size', women.get);
router.get('/categories', categories.get);
router.get('/', women.get)
module.exports = router;
