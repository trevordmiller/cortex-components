import React from 'react'
import {View, Text} from 'react-native'
import {gql, graphql} from 'react-apollo'
import Loading from '../Loading'

const Hello = ({data}) => data.todos 
  ? <View style={{
      backgroundColor: 'lightblue',
      padding: 10,
    }}>
      {data.todos.map((todo) => (
        <Text key={todo.id}>
          {todo.title}
        </Text>
      ))}
    </View>
  : <Loading />

const query = gql`{todos {id, title}}`

export default graphql(query)(Hello)
