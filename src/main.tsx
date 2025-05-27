import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from "./components/App";

import { APPLICATION_NAME } from "./constants/app.constants";

import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider
      client={
        new ApolloClient({
          uri: process.env.VITE_GRAPHQL_ENDPOINT,
          cache: new InMemoryCache(),
        })
      }
    >
      <App applicationName={APPLICATION_NAME} />
    </ApolloProvider>
  </StrictMode>,
);
