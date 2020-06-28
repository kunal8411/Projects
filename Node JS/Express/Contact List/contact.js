/D/Contact_List/Models/contact.js
//inthis file we created schema and  database


const mongoose= require('mongoose');


const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

// Creating database, use starting of db name with caps ,
//this  will create a database referance called Contact and having Schema as contactSchema which we have defined above
//model is used for collections
const Contact= mongoose.model('Contact', contactSchema);


module.exports= Contact; 


