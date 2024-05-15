"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo-client";

export function ApolloWrapper({ children }: { children: any }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
