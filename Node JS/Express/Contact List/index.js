

/D/Contact_List/inddex.js



const express= require('express');
const path= require('path');
const port=8000;

// var ejs=require('ejs')




const db=require('./config/mongoose');

//used to create db, collection should get populated 
const Contact= require('./models/contact');

const app= express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());



var contactList=[
    {
        name:"kunal",
        phone:"1111111111111"
    },
    {
        name:"Piyush",
        phone:"22222222222222"
    },
    {
        name:"Debashis",
        phone:"33333333333333"
    }
]

// this will search assests folder in root folder where we have write this .js file.  
//and assets will have different folders inside it 
app.use(express.static('assets'));

app.get('/',function(req,res){

    Contact.find({},function(err,contacts){
        if(err){
            console.log('error find while fetching contacts ');
            return; 

        }
        return res.render('home',{
            title:"Kunal Here",
            contact_list:contacts
        });
    });
    
    
    
});

app.get('/profile', function(req,res){
    return res.render('practice',{
        body:"hello body"
    });
});


app.post('/create-contact',function(req,res){
//    contactList.push({
//        name:req.body.name,
//        phoneNo:req.body.phoneno
//    });

    Contact.create({
        name:req.body.name,  
        phone: req.body.phone
    },function(err,newContact){
        if(err){
            console.log("error while creating contact List");
            return;

        }
        console.log('**********', newContact);
        return res.redirect('/');

    })

//    return res.redirect('/');

});
app.get('/delete-contact',function(req,res){
    

    //find id of contact which we want to delete 
    let id= req.query.id;

    //find contact in database using id and delete it:-  
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log("we have encountered error while deleting");
            return ;
        }
        //after deleting we will redirect to same page
        return res.redirect('back');
        
        

    });

})

app.listen(port,function(err){
    if(err){
        console.log('error found',err);

    }

    console.log("Hello your server is running on port",port)
});

