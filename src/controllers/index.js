const router = require('express').Router();
const women = require('./women');
const men = require('./men');
// const categories = require('./categories');
const login = require('./login');
const checkAuth = require('./checkAuth');
const home = require('./home');
const details = require('./details');
const signup = require('./signup');
const about = require('./about');
const contactus = require('./contactus');

router.get('/signup', signup.get);
router.post('/signup', signup.post);
router.get('/', home.disconutValue);
router.get('/aboutus', about);
router.get('/contactus', contactus.get);
router.post('/contactus', contactus.post);
router.get('/women', women.get);
router.get('/men', men.get);
router.get('/details', details.get);
router.get('/details/:id', details.get);
router.get('/login', login.get);
router.post('/login', login.post);
router.use(checkAuth);


module.exports = router;
