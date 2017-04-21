import React from 'react'
import {View, Text} from 'react-native'
import {QueryRenderer, graphql} from 'react-relay'
import environment from '../utils/environment'

const BrowseQuestions = ({questions}) => (
  <View>
    {questions.map((question) => (
      <Text key={question.id}>
        {question.title}
      </Text>
    ))}
  </View>
)

export default () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query BrowseQuestionsQuery {
        questions {
          id,
          title
        }
      }
    `}
    render={({error, props}) => {
      if (error) {
        return (
          <div>
            Error: {error.message}
          </div>
        )
      } else if (props) {
        return (
          <BrowseQuestions questions={props.questions} />
        )
      }
      return (
        <div>
          Loading
        </div>
      )
    }}
  />
)
