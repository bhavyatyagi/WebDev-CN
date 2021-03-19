const express=require('express');

const router=express.Router();

//after creating corresponding controller of it
const usersController=require('../controllers/users_controller');
router.get('/profile',usersController.profile)


module.exports=router;