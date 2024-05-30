const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    age: Int
    address: String
    religion: String
    nationality: String!
  }
  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;
