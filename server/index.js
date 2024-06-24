const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const cors = require('cors')
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
  credentials: true 
}))
app.use(cookieParser())

// app.use((req,res,next) =>{
//     console.log(req.cookies)
// })

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

