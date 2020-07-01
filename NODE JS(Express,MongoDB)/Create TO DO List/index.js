const express = require('express');
const path= require('path');
const port= 8000;

const app=express();
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


var todolist=[
    {
        description:"Annual report submission deadline",
        date:29-06-2001,
        category:"school"
    },
    {
        description:"Final Exam preperation",
        date:29-06-1222,
        category:"college"
    }
]

app.get('/',function(req,res){
    return res.render('home',{
        to_List:todolist
    });
});

app.post('/add-task',function(req,res){
    todolist.push({
        description:req.body.description,
        date:req.body.date,
        category:req.body.category

    });
    return res.redirect('/');
});

app.get('/delete-task',function(req,res){
    let desc=req.query.id;
    console.log(desc);

    var index= todolist.findIndex(contact => contact.description==desc);

    if(index!=-1){
        todolist.splice(index,1);
    }
    res.redirect('/')

});

app.listen(port,function(err){
    if(err){
        console.log("error found");

    }
    console.log("server is up and running on port:",port);

})

