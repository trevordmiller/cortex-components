import React from 'react'
import {View, Text} from 'react-native'

const questions = [
  {
    id: 1,
    title: 'What is the keyboard shortcut to open a new tab?',
    answer: 'Command + T',
  },
  {
    id: 2,
    title: 'What is the keyboard shortcut to close the current tab?',
    answer: 'Command + W',
  },
]

const BrowseQuestions = () => (
  <View>
    {questions.map((question) => (
      <Text key={question.id}>
        {question.title}
      </Text>
    ))}
  </View>
)

export default BrowseQuestions
