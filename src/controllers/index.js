const express = require('express');
const router = express.Router();
const women = require('./women');
const men = require('./men');
// const categories =require('./categories');

router.get('/', women.get);
// router.get('/torso/torso',categories.getTorso);
// router.get('/legs',categories.getlegs);
// router.get('/shoes',categories.getshose);
// router.get('/accessories',categories.getacceories);
router.get('/men', men.discount);


module.exports = router;
