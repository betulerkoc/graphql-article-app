const { GraphQLServer, PubSub } = require("graphql-yoga");
const resolvers = require("./graphql/resolvers");
const types = require('./graphql/types')
const db = require("./data");

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: types,
  resolvers,
  context: { pubsub, db },
});

server.start(() => console.log("Server is running on localhost:4000"));
