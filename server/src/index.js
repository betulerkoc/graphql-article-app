const { GraphQLServer, PubSub } = require("graphql-yoga");
const resolvers = require("./graphql/resolvers");
const types = require("./graphql/types");

const User = require("./model/User");
const Post = require("./model/Post");
const Comment = require("./model/Comment");

const db = require("./db");
db();

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: types,
  resolvers,
  context: {
    pubsub,
    _db: {
      User,
      Post,
      Comment
    },
  },
});

server.start(() => console.log("Server is running on localhost:4000"));
