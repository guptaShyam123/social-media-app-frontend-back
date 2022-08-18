   const jwt = require('jsonwebtoken');
   const User = require('../models/User')


const verifyUser = async(req,res,next)=>{
    try {
        const token = req.headers.authorization
        if (!token) {
        res.status(400).json({message:"invalid"})
        }
       
        const decoded = await jwt.verify(token, process.env.secretkey);
        req.user = await User.findById(decoded.id);
        console.log(decoded);
        next(); 

    } catch (error) {
        res.status(400).json({message:error.message})
    }
} 

module.exports = verifyUser;