const express = require('express');
const router = express.Router();
const categories = require('./categories');
const women = require('./women')

router.get('/men/category/', categories.get);
router.get('/men/category/:id', categories.hell);
router.get('/', women.get)


module.exports = router;
