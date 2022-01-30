const { GraphQLServer, PubSub } = require("graphql-yoga");
const resolvers = require("./graphql/resolvers");
const types = require("./graphql/types");
const data = require("./data");

const User = require("./model/User");
const Post = require("./model/Post");
const Comment = require("./model/Comment");

const db = require("./db");
db();

setTimeout(async () => {
  const users = await User.find();
  const posts = await Post.find();
  const comments = await Comment.find();
  console.log("users", users);
  console.log("posts", posts);
  console.log("comments", comments);
}, 1000);


const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: types,
  resolvers,
  context: {
    pubsub,
    data,
    _db: {
      User,
      Post,
      Comment
    },
  },
});

server.start(() => console.log("Server is running on localhost:4000"));
