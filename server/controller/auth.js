//lib
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

//schema
const User = require("../models/user");

exports.signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if all fields are provided
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "Please fill all the Fields" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User Already exist" });
    }

    // Encrypt the password
    const hashedPass = await bcryptjs.hash(password, 10);

    // Create a new user in the database
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone: undefined,
      password: hashedPass,
    });

    // Generate a token for the user
    const token = jwt.sign(
      { id: newUser._id, email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "2d" }
    );

    newUser.token = token;

    // Exclude the password from the response
    newUser.password = undefined;

    const options = {
      maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
      httpOnly: true,
    };

    res.cookie('tokens', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Please ensure cookies are only sent over HTTPS in production
      sameSite: 'strict',
      maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
      // maxAge:   1000, //
    });

    res.status(200)
      .cookie("token", token, options)
      .json({ success: true, token, newUser });
  } catch (err) {
    console.log("Error in SignUp:", err);
    res.status(500).json({ message: "Internal Server Error" });
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
