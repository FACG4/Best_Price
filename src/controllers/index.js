const home = require('./home');
const women = require('./women');
const men = require('./men');
const details = require('./details');
const router = require('express').Router();
const signup = require('./signup');
// const saved = require('./savedFashion');
// const unsaved = require('./unsavedItems');

router.get('/signup',signup.get);
router.post('/signup',signup.post);
router.get('/',home.disconutValue);
router.get('/details', details.get);
router.get('/details/:id', details.get);
router.get('/women', women.get);
router.get('/men', men.discount);


module.exports = router;
