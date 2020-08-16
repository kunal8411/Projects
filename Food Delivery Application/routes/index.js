const express= require('express');
const path= require('path');

const router= express.Router();









const homeController= require('../controllers/home_controller')

router.get('/', homeController.home );
router.use('/category',require('./category'));


module.exports=router;
