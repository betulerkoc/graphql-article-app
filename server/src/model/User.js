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
  posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
  }],
  comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
  }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
