const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
const User = require('./routes/User')
const Post = require('./routes/Post')
const cors = require("cors");


dotenv.config();
app.use(cors())



mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connection succesfull");
})
.catch((err) => {  
     console.log(err); 
    });
    
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use("/api/v1" , User)
app.use("/api/v1", Post)

app.listen( PORT , ()=>{
      console.log('listening on port '+PORT );
    
})

