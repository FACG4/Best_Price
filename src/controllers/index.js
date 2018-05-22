const home = require('./home');
const women = require('./women');
const men = require('./men');
const router = require('express').Router();

router.get('/',home);
router.get('/women',women);
router.get('/men',men);
module.exports = router;
