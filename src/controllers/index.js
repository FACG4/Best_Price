const router = require('express').Router();
const women = require('./women');
const men = require('./men');
const login = require('./login');
const checkAuth = require('./checkAuth');
const home = require('./home');
const details = require('./details');
const saved = require('./savedFashion');
const unsaved = require('./unsaved');
const signup = require('./signup');
const about = require('./about');
const contactus = require('./contactus');
const logout = require('./logout');
const categories = require('./categories');


router.use(checkAuth);
router.get('/signup', signup.get);
router.post('/signup', signup.post);
router.get('/login', login.get);
router.post('/login', login.post);
router.get('/logout', logout.get);
router.get('/', home.disconutValue);
router.get('/men', men.get);
router.get('/women', women.get);
router.get('/aboutus', about);
router.get('/contactus', contactus.get);
router.post('/contactus', contactus.post);
router.get('/men/:category/', categories.getMen);
router.get('/women/:category/', categories.getWomen);
router.get('/saved-fashion/:id', saved.get);
router.post('/saved', saved.post);
router.post('/unsaved', unsaved.post);
router.get('/details', details.get);
router.get('/details/:id', details.get);


module.exports = router;

