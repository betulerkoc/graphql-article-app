const Comment = {
  user: async (parent, _, { _db }) => await _db.User.findById(parent.user),
  post: async (parent, _, { _db }) => await _db.Post.findById(parent.post),
};

module.exports.Comment = Comment;
