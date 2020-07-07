const express= require('express');
const path= require('path');
const app= express();

app.set('views',path.join(__dirname,'views'));
//home is a action name whic is to be perforemed 
//this home we will import on perticular route like /home,/profile
app.set('view engine','ejs');
module.exports.home= function(req,res){
    return res.render('../views/home');
}


// module.exports.profile= function(req,res){
//     return res.end('<h1>My Profile is loading, please wait </h1>')
// }
