const express = require("express");
// const bookController = require("../controller/book.js");
const router = express.Router();

const authController = require('../controller/auth')

router.post('/sign-up',authController.singUp)
router.post('/sign-in',authController.signIn)

// get books from db
// router.get("/all-books", bookController.getAllBooks);

module.exports = router;