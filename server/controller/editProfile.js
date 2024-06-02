const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user')

// exports.postEditProfile = async (req,res) => {
//     try {
        
//         const user = req.user;

//     const {firstName, lastName, email, password ,phone} = req.body;

    
    
//     const hashedPass = await bcryptjs.hash(password,10)

//     const result = await User.updateOne( {_id:user.id},{firstName,lastName,email,password:hashedPass, phone} )
//     res.send("Update Succesfully")

//     } catch (err) {
//         res.send("Profile Didn't update")
//     }
    
    
// }

exports.postEditProfile = async (req, res) => {
    const { firstName, lastName, email, password, phone } = req.body;
    const userId = req.user.id; // Assuming req.user contains authenticated user's info
  
    try {
      // Find the user by ID
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update user fields based on provided data
      if (firstName) user.firstName = firstName;
      if (lastName) user.lastName = lastName;
      if (email) user.email = email;
      if (phone) user.phone = phone;
  
      // Update password if provided (and hash it)
      if (password) {
        const hashedPassword = await bcryptjs.hash(password, 10);
        user.password = hashedPassword;
      }
  
      // Save updated user data to the database
      await user.save();
  
      res.status(200).json({ message: 'Profile updated successfully', user: user });
    } catch (err) {
      console.error('Error updating profile:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };