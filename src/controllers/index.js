


const router = require('express').Router();
const women = require('./women');
const men = require('./men');
const categories = require('./categories');
const login = require('./login');
const checkAuth = require('./checkAuth');
const home = require('./home');
const details = require('./details');
const signup = require('./signup');

router.get('/',home.disconutValue);
router.get('/women', women.get);
router.get('/men', men.get);
router.get('categories/size', women.get);
router.get('/categories', categories.get);
router.get('/signup',signup.get);
router.post('/signup',signup.post);
router.get('/login', login.get);
router.post('/login', login.post);
router.get('/details', details.get);
router.get('/details/:id', details.get);
router.use(checkAuth);


module.exports = router;
