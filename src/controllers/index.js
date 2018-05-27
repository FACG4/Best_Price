const home = require('./home');
const women = require('./women');
const men = require('./men');
const details = require('./details');
const signup = require('./signup');
const router = require('express').Router();

router.get('/signup',signup.get);
router.post('/signup',signup.post);
router.get('/',home.disconutValue);
router.get('/details', details.get);
router.get('/details/:id', details.get);
router.get('/women', women.get);
router.get('/men', men.discount);
module.exports = router;
