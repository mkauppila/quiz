
import * as React from 'react'
import styled from '../../styled'

import Title from './title'
import Question from './question'
import Answers from './answers'

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`

const FlexWrapper = styled.div`
`

export default (props: /*AppState & { action: () => {} }*/ any) => (
  <FlexContainer>
    <FlexWrapper>
      <Title>{props.title}</Title>
      <Question>{props.question}</Question>
      <Answers answers={props.answers} action={props.actions} />
    </FlexWrapper>
  </FlexContainer>
)
