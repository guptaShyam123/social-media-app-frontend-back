const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({


    name:{
        type: String,
    },
    password:{

    type: String,
    minLength:6,
    },

    email:{
        type: String,
        required: true,
    },

    avatar:{
        public_id: String,
        url: String,
    },

    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
    ],
  
     

})

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    this.resetPasswordExpire = Date.now();
  
    return resetToken;
  };

module.exports = mongoose.model("User" , userSchema)