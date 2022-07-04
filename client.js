const { GraphQLClient } = require( "graphql-request");

const client = new GraphQLClient("http://localhost:8080/v1/graphql", {
  headers: { "x-hasura-admin-secret": "admin_secret" },
});

module.exports = client