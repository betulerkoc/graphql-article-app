const { withFilter} = require("graphql-yoga");

const Subscription = {
  userCreated: {
    subscribe: (parent, args, { pubsub }) =>
      pubsub.asyncIterator("userCreated"),
  },
  userUpdated: {
    subscribe: (parent, args, { pubsub }) =>
      pubsub.asyncIterator("userUpdated"),
  },
  userDeleted: {
    subscribe: (parent, args, { pubsub }) =>
      pubsub.asyncIterator("userDeleted"),
  },

  //Post
  postCreated: {
    subscribe: withFilter(
      (parent, args, { pubsub }) => pubsub.asyncIterator("postCreated"),
      (payload, variables) => {
        return variables.user_id
          ? payload.postCreated.user === variables.user_id
          : true;
      }
    ),
  },
  postUpdated: {
    subscribe: (parent, args, { pubsub }) =>
      pubsub.asyncIterator("postUpdated"),
  },
  postDeleted: {
    subscribe: (parent, args, { pubsub }) =>
      pubsub.asyncIterator("postDeleted"),
  },

  //Comment
  commentCreated: {
    subscribe: (parent, args, { pubsub }) =>
      pubsub.asyncIterator("commentCreated"),
  },
  commentUpdated: {
    subscribe: (parent, args, { pubsub }) =>
      pubsub.asyncIterator("commentUpdated"),
  },
  commentDeleted: {
    subscribe: (parent, args, { pubsub }) =>
      pubsub.asyncIterator("commentDeleted"),
  },
};

module.exports.Subscription = Subscription;
