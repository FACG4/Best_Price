
const router = require('express').Router();
const women = require('./women');
const men = require('./men');
const categories = require('./categories');
const login = require('./login');
const checkAuth = require('./checkAuth');
const home = require('./home');
const details = require('./details');
const signup = require('./signup');
const logout = require('./logout');

router.use(checkAuth);
router.get('/women', women.get);
router.get('/',home.disconutValue);
router.get('/men', men.get);
router.get('categories/size', women.get);
router.get('/categories', categories.get);
router.get('/signup',signup.get);
router.post('/signup',signup.post);
router.get('/login', login.get);
router.post('/login', login.post);
router.get('/logout', logout.get);
router.get('/details', details.get);
router.get('/details/:id', details.get);


module.exports = router;
