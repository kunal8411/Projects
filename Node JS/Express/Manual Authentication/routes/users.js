const express = require('express');


const router = express.Router();


var userController = require('../controllers/users_contoller');


//when we hit "localhost:8000/users/profile" in url this code will run 
router.get('/profile',userController.profile);


router.get('/login', userController.login);

router.get('/signup',userController.signup);


router.post('/create', userController.create); 

router.post('/create-session', userController.creteSession);


router.get('/signout',userController.delete);



//this is important statement
module.exports=router;
