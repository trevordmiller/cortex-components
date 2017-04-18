import React from 'react'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import Hello from '../Hello'

const apiUri = 'https://cortex-api-inzustenbc.now.sh'
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({uri: apiUri})
})

const Root = () => (
  <ApolloProvider client={apolloClient}>
    <Hello />
  </ApolloProvider>
)

export default Root

