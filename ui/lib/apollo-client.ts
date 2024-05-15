// lib/apollo-client.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";

const httpLink = new HttpLink({
  uri: "http://localhost:1337/graphql", // your GraphQL endpoint
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get("jwt");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),

  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});
