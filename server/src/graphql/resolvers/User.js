const User = {
  posts: async (parent, _, { _db }) => await _db.Post.find({ user: parent.id }),
  comments: async (parent, _, { _db }) => await _db.Comment.find({user: parent.id})
};

module.exports.User = User;
