const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
//routes
const authRoutes = require('./routes/auth')
const editProfileRoutes = require('./routes/editProfile')
const mediaKit = require('./routes/mediaKit')
const youtube = require('./routes/youtube')

// midelware 
const auth = require('./middlewares/auth')

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 7000;

const MONGO_URL = process.env.MONGO_URL;



// Middleware to parse JSON bodies
app.use(express.json());

//Other middle wares
app.use(cors({
  origin:'http://localhost:3000',
  credentials:true,
  
}))
app.use(cookieParser())

app.get('/',(req,res,next) =>{
    console.log("server",req.cookies)
next()
})
app.post('/token-auth',(req,res,next) =>{
  
  try {
    const token = req.cookies.token;
    console.log("Middleware token:", token);

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Token not found" });
    }
    console.log("before token")
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("after token")
    console.log("user",user)
    req.user = user; // Attach user info to req object
    res.status(200).json({message:"User is Authorized"})


} catch (err) {
    console.log("Error in auth middleware", err.message);

    if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: "Unauthorized: Token has expired" });
    }

    if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    res.status(401).json({ message: "Unauthorized: Token verification failed" });
}

})

// Connect to MongoDB using Mongoose
mongoose
  .connect(MONGO_URL,
    {serverSelectionTimeoutMS: 30000} // 30 seconds
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


app.use(mediaKit)
app.use(editProfileRoutes)
app.use(authRoutes)
app.use(youtube)


// Start the Express server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

