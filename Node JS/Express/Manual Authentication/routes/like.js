const express= require('express');

const router= express.Router();

var likesController= require('../controllers/likes_controller')

router.get('/person',likesController.likes);




module.exports=router;
