import {Environment, Network, RecordSource, Store} from 'relay-runtime'
import {apiUrl} from '../../urls'

const fetchQuery = (operation, variables) => 
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
    .then(response => {
      return response.json()
    })

const network = Network.create(fetchQuery)
const store = new Store(new RecordSource())

export default new Environment({
  network,
  store,
})
