const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
