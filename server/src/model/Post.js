const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
