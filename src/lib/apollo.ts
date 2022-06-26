import { ApolloClient, InMemoryCache } from '@apollo/client'

const token = import.meta.env.VITE_API_ACCESS_TOKEN

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${token}`
  },
  cache: new InMemoryCache()
})

export { client }