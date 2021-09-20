const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const resolvers = require('./resolvers/resolvers');
const typeDefs = require('./typeDefinitions/typeDefs');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

async function startApolloServer(typeDefs, resolvers) {

  const app = express();
  // to access graphql API from the client side
  app.use(cors());

  app.use(function (req, res, next) {
    res.setHeader('X-Frame-Options', 'sameorigin');
    next();
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
  });

  await server.start();

  server.applyMiddleware({ app });

  const port = process.env.PORT || 4200;

  app.listen(port, err => {
    if (err) throw err
    console.log(
      `Server Started at http://localhost:${port}${server.graphqlPath}`,
    )
  })
}

startApolloServer(typeDefs, resolvers);
