import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qaim773f8t01xn2ssk3hh5/master',
  cache: new InMemoryCache()
})