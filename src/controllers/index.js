const home = require('./home');
const women = require('./women');
const men = require('./men');
const details = require('./details');
const saved = require('./savedFashion');
const unsaved = require('./unsavedItems');
// const categories = require('./categories');
const router = require('express').Router();

router.get('/',home.disconutValue);
// router.get('/women',women);
// router.get('/men',men);
router.get('/details', details.get);
router.get('/details/:id', details.get);
// router.get('/categories',categories);
router.get('/saved-fashion/:user_id', saved.get);
router.post('/saved', saved.post);
router.post('/unsaved', unsaved.post);
module.exports = router;
