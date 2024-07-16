const express = require("express");
// const bookController = require("../controller/book.js");
const auth = require("../middlewares/auth")
const router = express.Router();

const authController = require('../controller/auth')

// router.post('/token-auth',auth)
router.post('/sign-up',authController.signUp)
router.post('/sign-in',authController.signIn)


module.exports = router;