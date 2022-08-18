const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

      
       caption:{
          type:String
       },
       image:{
        public_id: String,
        url: String,
       } ,
       admin:{
  
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
       },
       likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
       ],
       comments:[
        
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
            },
            comment:{
                type:String,
                required:true,
            }
        }

            ]

  

})

module.exports = mongoose.model("Post" , PostSchema)