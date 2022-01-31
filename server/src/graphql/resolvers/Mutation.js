const { nanoid } = require("nanoid");

const Mutation = {
  //User
  createUser: async (_, { data }, { pubsub, _db }) => {
    const newUser = new _db.User({
      ...data,
    });
    const user = await newUser.save();
    pubsub.publish("userCreated", { userCreated: user });
    return user;
  },

  updateUser: async (_, { id, data }, { pubsub, _db }) => {
    const isUser = await _db.User.findById(id);

    if (!isUser) {
      throw new Error("User not found");
    }

    const updated_user = await _db.User.findByIdAndUpdate(id, data, {
      new: true,
    });
    pubsub.publish("userUpdated", { userUpdated: updated_user });
    return updated_user;
  },

  deleteUser: async (_, { id }, { pubsub, _db }) => {
    const isUser = await _db.User.findById(id);

    if (!isUser) {
      throw new Error("User not found");
    }

    const deleted_user = await _db.User.findByIdAndDelete(id);
    pubsub.publish("userDeleted", { userDeleted: deleted_user });
    return deleted_user;
  },

  deleteAllUsers: async (_, __, { _db }) => {
    const deleted_users = await _db.User.deleteMany({});

    return {
      count: deleted_users.deletedCount,
    };
  },

  createPost: async (_, { data }, { pubsub, _db }) => {
    const newPost = new _db.Post({
      ...data,
    });
    const post = await newPost.save();
    pubsub.publish("postCreated", { postCreated: post });
    return post;
  },

  updatePost: async (_, { id, data }, { pubsub, _db }) => {
    const isPost = await _db.Post.findById(id);

    if (!isPost) {
      throw new Error("Post not found");
    }

    const updated_post = await _db.Post.findByIdAndUpdate(id, data, {
      new: true,
    });
    pubsub.publish("postUpdated", { postUpdated: updated_post });
    return updated_post;
  },

  deletePost: async (parent, { id }, { pubsub, _db }) => {
    const isPost = await _db.Post.findById(id);

    if (!isPost) {
      throw new Error("Post not found");
    }

    const deleted_post = await _db.Post.findByIdAndDelete(id);
    pubsub.publish("postDeleted", { postDeleted: deleted_post });
    return deleted_post;
  },

  deleteAllPosts: async (_, __, { _db }) => {
    const deleted_posts = await _db.Post.deleteMany({});

    return {
      count: deleted_posts.deletedCount,
    };
  },

  createComment: async (parent, { data }, { pubsub, _db }) => {
    const newComment = new _db.Comment({
      ...data,
    });
    const comment = await newComment.save();
    pubsub.publish("commentCreated", { commentCreated: comment });
    return comment;
  },

  updateComment: async (parent, { id, data }, { pubsub, _db }) => {
    const isComment = await _db.Comment.findById(id);

    if (!isComment) {
      throw new Error("Comment not found");
    }

    const updated_comment = await _db.Comment.findByIdAndUpdate(id, data, {
      new: true,
    });
    pubsub.publish("commentUpdated", { commentUpdated: updated_comment });
    return updated_comment;
  },

  deleteComment: async (parent, { id }, { pubsub, _db }) => {
    const isComment = await _db.Comment.findById(id);

    if (!isComment) {
      throw new Error("Comment not found");
    }

    const deleted_comment = await _db.Comment.findByIdAndDelete(id);
    pubsub.publish("commentDeleted", { commentDeleted: deleted_comment });
    return deleted_comment;
  },

  deleteAllComments: async (_, __, { _db }) => {
    const deleted_comments = await _db.Comment.deleteMany({});

    return {
      count: deleted_comments.deletedCount,
    };
  },
};

module.exports.Mutation = Mutation;
