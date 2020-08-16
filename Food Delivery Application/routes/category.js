const express= require('express');
const path= require('path');

const router= express.Router();






const categoryController= require('../controllers/category_controller');




router.get('/fruits', categoryController.fruits);

router.get('/vegetables', categoryController.vegetables);

router.get('/dailyneeds', categoryController.dailyneeds);

router.get('/dairyproducts', categoryController.dairyproducts);

router.get('/milk',categoryController.milk);

router.get('/bakerybiscuits',categoryController.bakery);

router.get('/beverages',categoryController.beverages);

router.get('/snacks',categoryController.snacks);

router.get('/breakfast',categoryController.breakfast);

router.get('/spreads',categoryController.spreads);





module.exports=router;
