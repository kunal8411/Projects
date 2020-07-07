const express=require('express');

const router= express.Router();

var postController= require('../controllers/post_Controller');

router.get('/kunal',postController.post);





module.exports=router;
