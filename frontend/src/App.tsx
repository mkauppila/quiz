import * as React from 'react';
import styled, { injectGlobal } from './styled'

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

// tslint:disable-line:no-unused-expression
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lora', 'serif';
  }

  @import url('https://fonts.googleapis.com/css?family=Vollkorn+SC:600,700');
  @import url('https://fonts.googleapis.com/css?family=Lora');
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
`

// Add proper theming instead of just putting stuff in the componetns
// Use the `ThemeProvider`

// export default () => (
export default class App extends React.Component {
  render() {
    return ( 
      <FlexContainer>
        <Wrapper>
          <Title>{quiz.title}</Title>
          <Question>{quiz.question}</Question>
          <Answers answers={quiz.answers} />
        </Wrapper>
      </FlexContainer>
    )
  }
}
