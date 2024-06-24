const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: Number, sparse: true },
  password: { type: String, required: true },
  image_url: { type: String, default: null },
  token: { type: String, default: null }
});

module.exports = mongoose.model('User', userSchema);
