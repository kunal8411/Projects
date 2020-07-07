//used to import database
const User=require('../models/user');





module.exports.profile=function(req,res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(user){
                
                return res.render('users_profile',{
                    title:"user Profile",
                    user:user
                });

            }
            return res.redirect('/users/login');
        });
    }
    else{
        return res.redirect('/users/login')
    }
    //return res.render('../views/users_profile');
}


module.exports.login=function(req,res){
    return res.render('../views/login');

}


module.exports.signup=function(req,res){
    return res.render('../views/signup');
    
}



//get the sign up data 
module.exports.create= function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');

    }  

    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log('error finding in user in sign up');
            return; 
     
        }
        if(!user){
            User.create(req.body, function(err,user){
                if (err){console.log('error in creating user while signing up');  return }


                return res.redirect('/users/login'); 
            })
        }
        else{
            return res.redirect('back');
        }
    });

}


//for login page, validate login information of user
module.exports.creteSession= function(req,res){
    //find the user using mail id 
    User.findOne({email:req.body.email},function(err,user){
        //if found error then execute this
        if(err){
            console.log('Not able to find user with this credentials');
            return;
        }
        
        //handle if user found
        if(user){
            //user find but password doesnt match 
            if(user.password != req.body.password){
                return res.redirect('back');

            
            }   
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile')

            
            
            }else{
                //handle session creation
                return res.redirect('back');
                }
        

    });
 

     
}


module.exports.delete= function(req,res){
    id= req.query.id;
    
    if(id==req.cookies.email){
        res.clearCookie(req.cookies.email);
    }
    return res.redirect('/users/login'); 

}
