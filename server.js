const { ApolloServer } = require("apollo-server");
const { MongoClient } = require("mongodb");

const resolvers = require("./resolver");
const typeDefs = require("./schema");
const createAndPopulateDB = require("./faker");

const MONGO_URI = "mongodb://localhost:27017";
const DB_NAME = "graphqlDemo";

async function startServer() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  await createAndPopulateDB(client, DB_NAME);

  const server = new ApolloServer({ typeDefs, resolvers, context: () => client.db(DB_NAME) });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start server", error);
});
