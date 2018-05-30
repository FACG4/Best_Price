


const router = require('express').Router();
const women = require('./women');
const men = require('./men');
const categories = require('./categories');
const login = require('./login');
const checkAuth = require('./checkAuth');
const home = require('./home');
const details = require('./details');
const saved = require('./savedFashion');
const unsaved = require('./unsaved');
const signup = require('./signup');


router.use(checkAuth);
router.get('/:category/:item/', categories.get);
router.get('/:category/:item/:id', categories.hell);
router.get('/', home.disconutValue);
router.get('categories/size', women.get);
router.get('/categories', categories.get);
router.get('/signup', signup.get);
router.post('/signup', signup.post);
router.get('/login', login.get);
router.post('/login', login.post);
router.get('/details', details.get);
router.get('/details/:id', details.get);
router.get('/women', women.get);
router.get('/saved-fashion/:id', saved.get);
router.post('/saved', saved.post);
router.post('/unsaved', unsaved.post);

module.exports = router;
