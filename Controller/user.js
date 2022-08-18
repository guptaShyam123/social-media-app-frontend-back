const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



exports.register = async (req,res) =>{
    
    try{
            
 const {name  , password , email} = req.body
    
 let passwords =  await bcrypt.hash(password , 10)

       let user = await User.findOne({email:email})
       if(user){


  res.status(400).json({msg:"user already exists"})
       }
    

       user = await User.create({
     name,password:passwords,email
       })

     
       
       res.status(201).json({user:user  })
      
    }catch(err){
    res.status(404).json({message:err.message});
    }
}

// login users

exports.login  = async (req , res) =>{
    
  try{
       
    const {email , password} = req.body

      const user = await User.findOne({email , password})
      if(!user){
        res.status(404).json({message:"user not found"});
      }
    
      // const isMatch = user.matchPassword(password);
      // if(!isMatch){
      //  res.status(400).json({messege:"wrong password or email"});
      // }
       const token = jwt.sign(
           { id: user._id },
           process.env.secretkey,
           { expiresIn: "3d" }
         );
       console.log(user._doc);
         res.json({user:user,token})      
  }catch(err){
    res.status(500).json({message:err.message});
  }

}