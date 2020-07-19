const express= require('express');
const port=8080;

const app= express();


//to include static files 
app.use(express.static('./assets'));


//for layout
const expressLayout=require('express-ejs-layouts');
app.use(expressLayout);


//set up view engine
app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'));  
app.set('views','./views');

//transfwe to route
app.use('/', require('./routes/index'));


app.listen(port, function(err){
    if(err){
        console.log('unable to connect to port');
    }

    console.log('server is running on port:',port);
})
