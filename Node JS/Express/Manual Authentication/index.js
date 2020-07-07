const express= require('express');
const cookieParser= require('cookie-parser');
const port =8000;
const path= require('path');
const app= express();

app.use(cookieParser());


//for including static files 
app.use(express.static('./assets'));
app.use(express.urlencoded());
const db = require('./config/mongoose')

//to use different static files(css,html.js) for every page 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//this is for layout, include the library and use that same library 
const expressLayout=require('express-ejs-layouts');
app.use(expressLayout);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//initially whenever we run localhost:8000
//the route wii be transfered to index.js file inside routes folder
app.use('/', require('./routes/index'));





app.listen(port,function(err){
    if(err){
        console.log(`Server will not run on this port:${err}`);

    }

    console.log(`server is running on port:${port}`);

})
