const express = require('express');

const verifyUser = require("../middleware/auth")

const {
  upload , likepost , deletepost , comments
} =  require('../Controller/post')

const router = express.Router()

router.route("/upload").post(verifyUser,upload)

router.route("/like/:id").get(verifyUser ,likepost)

router.route("/deletepo/:id").get(verifyUser,deletepost) 

router.route("/commentadd/:id").post(verifyUser,comments)







module.exports = router