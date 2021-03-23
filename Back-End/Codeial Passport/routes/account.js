const express=require('express');

const router=express.Router();

const accountController=require('../controllers/account_controller');
router.get('/settings',accountController.account);
router.get('/privacy',accountController.privacy);

module.exports=router;