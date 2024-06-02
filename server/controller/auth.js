//lib
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

//schema
const User = require("../models/user");

exports.singUp = async (req, res) => {
  try {
    //getting all data
    const { firstName, lastName, email, password } = req.body;

    // checking if all all is being send
    if (!(firstName && lastName && email && password)) {
      res.status(400).send("Please fill all the Fields");
    }
    //checking if user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).send("User Already exist");
    }
    // encrypting the password
    const hashedPass = await bcryptjs.hash(password, 10);

    // save the user in db

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPass,
    });

    //generate a token for user and send it

    const token = jwt.sign(
      { id: newUser._id, email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "2d",
      }
    );

    newUser.token = token;

    newUser.password = undefined; // undefiend properties dont get undefined in db. its done not to send field to frontend

    const options = {
      maxAge: 2 * 24 * 60 * 60 * 1000, // 1 day in milliseconds // days * hours * mins * secs * miliSecs
      httpOnly: true,
    };

    res.status(200).cookie("token", token, options).json({
      sucess: true,
      token,
      newUser,
    });
    //redirect to next page
  } catch (err) {
    console.log("err in SignUp");
    res.send(err);
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      console.log("signIn: filed missing ");
      res.status(400).send("email or password is missing");
    }

    // finding User in db
    const user = await User.findOne({ email });

    // if user not found and validating password
    if (!(user && (await bcryptjs.compare(password, user.password)))) {
      res.status(400).send("email or password incorrect");
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "2d",
      });
      user.token = token;
      user.password = undefined;

      //cookies
      const options = {
        maxAge: 2 * 24 * 60 * 60 * 1000, // 1 day in milliseconds // days * hours * mins * secs * miliSecs
        httpOnly: true,
      };
      
      res.status(200).cookie("token", token, options).json({
        sucess: true,
        token,
        user,
      });
    }
  } catch (err) {
    console.log("err in Sign In", err);
    res.send("err in Sign in");
  }
};
