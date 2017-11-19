import * as React from 'react';
import styled, { injectGlobal, ThemeProvider } from './styled'

import theme from './theme'
import quiz from './localMockData'
import Title from './components/quiz/title'
import Question from './components/quiz/question'
import Answers from './components/quiz/answers'

// tslint:disable-line:no-unused-expression
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Vollkorn+SC:600,700');
  @import url('https://fonts.googleapis.com/css?family=Lora');

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Lora', 'serif';
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
`

export default () => ( 
  <ThemeProvider theme={theme}>
    <FlexContainer>
      <Wrapper>
        <Title>{quiz.title}</Title>
        <Question>{quiz.question}</Question>
        <Answers answers={quiz.answers} />
      </Wrapper>
    </FlexContainer>
  </ThemeProvider>
)