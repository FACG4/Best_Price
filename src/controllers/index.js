const express = require('express');

const router = express.Router();

const women = require('./women');
const men = require('./men');
const categories = require('./categories');
const login = require('./login');
const checkAuth = require('./checkAuth');

router.use(checkAuth);
router.get('/', women.get);
router.get('/men', men.get);
router.get('categories/size', women.get);
router.get('/categories', categories.get);
router.get('/login', login.get);
router.post('/login', login.post);


module.exports = router;
