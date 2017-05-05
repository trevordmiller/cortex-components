const fetch = require('node-fetch')
const fs = require('fs')
const {buildClientSchema, introspectionQuery, printSchema} = require('graphql/utilities')
const {apiUrl} = require('../src/utils/urls')

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'query': introspectionQuery 
  }),
})
  .then(response => response.json())
  .then(response => {
    const schemaString = printSchema(buildClientSchema(response.data))
    fs.writeFileSync('src/utils/schema.graphql', schemaString)
  })
