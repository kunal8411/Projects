const express= require('express');
const path= require('path');

//route handler 
//to tranfer the routes 
const router= express.Router();


const app= express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));



//get action defined in home_controller.js
const homeController= require('../controllers/home_controller');




//on this route(/)-- call "homec" action
//call action defined as "home"
router.get('/',homeController.home);



//if path come as localhost:8000/user then redirect our route to users folder inside routed 
router.use('/users' ,require('./users'))

router.use('/post',require('./post'));
router.use('/likes', require('./like'));

//on route localhost:port/profile call profile action 
// router.get('/profile',homeController.profile);


//all get,post methods will be handled by this module 
//app will use this module
module.exports=router;
