import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from '@apollo/client';
import { createUploadLink } from "apollo-upload-client";

const terminatingLink = createUploadLink({ uri: 'http://localhost:4332/graphql', credentials: 'include' })
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: (terminatingLink as unknown) as ApolloLink
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
