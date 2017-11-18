import * as React from 'react';
import './App.css';

import Title from './components/quiz/title'
import Question from './components/quiz/questions'
import Answers from './components/quiz/answers'

const quiz = {
  title: 'Supernatural Quiz',
  question: 'How many seasons of Supernatural has been produced?',
  answers: [
    {
      answer: '8 seasons'
    },
    {
      answer: '14 seasons'
    },
    {
      answer: '12 seasons'
    },
    {
      answer: '6 seasons'
    },
  ]
}

export default () => (
  <div>
    <Title>{quiz.title}</Title>
    <Question>{quiz.question}</Question>
    <Answers answers={quiz.answers} />
  </div>
)
