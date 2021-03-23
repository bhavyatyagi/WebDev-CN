//This is being done but express's instance will be only called once and will remain same in all the other files
const express=require('express');

const router= express.Router();

//added later
const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/account',require('./account'));
router.use('/posts',require('./posts'));

//for an further routes, access from here
//example: router.use('/routerName',require('./routerFile));
module.exports=router;