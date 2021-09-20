import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api', // faker was not working so used graphqlZero
  cache: new InMemoryCache(),
})

export default apolloClient
