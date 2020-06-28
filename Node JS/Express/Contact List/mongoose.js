
/D/Contact_List/Config/mongoose.js




const mongoose=  require('mongoose');


//mongoose connect to database
//db name:- contact_list_db
mongoose.connect('mongodb://localhost/contact_list_db');    

//Acquire the connection:-check whether db is  connected or not
const db= mongoose.connection;

//error
db.on('error',console.error.bind(console,'erroro connecting to database '));

//if up and running
db.once('open',function(){
    console.log("successfully");
    
})
