const Query = {
  users: async (_, __, { _db }) => {
    const users = await _db.User.find();
    return users;
  },
  user: async (_, args, { _db }) => {
    const user = await _db.User.findById(args._id);
    return user;    
  },

  posts: async(_, __, { _db }) => {
    const posts = await _db.Post.find();
    return posts;
  },
  post: async(_, args, { _db }) => {
    const post = await _db.Post.findById(args._id)
    return post;
  },

  comments: async(_, __, { _db }) => {
    const comments = await _db.Comment.find();
    return comments;
  },
  comment: async(_, args, { _db }) => {
    const comment = await _db.Comment.findById(args._id);
    return comment;
  }
};

module.exports.Query = Query;
