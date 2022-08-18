const Post = require('../models/Post')
const User = require('../models/User')



exports.upload = async (req , res)=>{
    try{
     const caption = req.body.caption   

     const post = await Post.create({
        caption: caption,
        admin :req.user._id
     })
    
     const user = await User.findById(req.user._id)
    

     user.posts.push(post._id)
     await user.save()
     res.status(200).json({post:post})
    }catch(err){
        res.status(404).send({message: err.message});  
    }
}

// like and unlike posts of user

exports.likepost = async (req,res) =>{
    try{
     
         const post = await Post.findById(req.params.id)  
         const user = await User.findById(req.user._id)
        //  if(!post){
        //     return res.status(404).json({message:"post not found"})
        //  }

        //  if(post.likes.includes(req.user._id)){
             
        //     const index = post.likes.indexOf(req.user._id)
        //     post.likes.splice(index,1)
            

        //     await post.save()

        //       return res.status(200).json({messege:"post unliked"})
        //  }
        //  else{
        //     post.likes.includes(req.user._id)

        //     await post.save()

        //     return res.status(200).json({messege:"post liked"})
        //  }

        if(post.likes.push(req.user._id) != post.likes.push(req.user._id)){
            await post.save()
             return res.status(200).json({messege:"post liked successfully"})
            
        }
        else{
            return res.status(404).json({messege:"post unliked successfully"})
        }
       
    }catch(err){

        res.status(404).send({message: err.message});
    }
}


// delete user post from databse
  
exports.deletepost = async (req , res)=>{
    try{
         
    let user = await User.findById(req.user.id);
   // await user.save()
        // const post = await Post.findByIdAndDelete(req.params.id)
         //user = await .findByIdAndDelete(req.params.id)

        const post =  await Post.findById(req.params.id)
if(post.admin.toString()!==user.id.toString()){
    res.status(400).json({message:"Not Authenticated"})
}else{
    await post.remove();
    await user.save();
    res.status(200).json({message:"Success"})
}

  
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

// comment here of user


exports.comments = async (req , res) => {
  try{
    
   let post = await Post.findById(req.params.id);
   

  post.comments.push(
    {user :req.user._id,
        comment:req.body.comment
})
 
   await post.save();
    res.status(200).json({message:"Comment saved successfully",comment:post.comments})

  }catch(err){
   res.status(404).json({message: err.message});
  }
}