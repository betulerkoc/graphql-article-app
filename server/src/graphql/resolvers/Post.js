const Post = {
  user: async (parent, _, { _db }) => await _db.User.findById(parent.user),
  comments: async (parent, _, { _db }) =>
    await _db.Comment.find({ post: parent.id }),
};

module.exports.Post = Post;
