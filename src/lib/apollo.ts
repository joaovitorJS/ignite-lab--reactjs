import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oit62x0bug01xl0fr32y3z/master',
  cache: new InMemoryCache()
})

export { client }