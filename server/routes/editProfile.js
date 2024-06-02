const express = require('express')

const auth = require('../middlewares/auth')

const editProfileController = require("../controller/editProfile")

const router = express.Router();

router.post('/edit-profile',auth,editProfileController.postEditProfile)

module.exports = router