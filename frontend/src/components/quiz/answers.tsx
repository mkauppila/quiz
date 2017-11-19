import * as React from 'react'
import styled from '../../styled'

interface Answer {
  answer: string
}

interface Props {
  answers: Answer[]
}

const List = styled.ul`
`
const ListItem = styled.li`
  list-style: none;
  margin-bottom: ${({ theme }) => theme.padding.tiny};
`
const RadioBox = styled.input.attrs({
  type: 'radio'
})`
  margin-right: ${({ theme }) => theme.padding.medium}px;
`
const Submit = styled.input.attrs({
  type: 'submit',
})`
  margin-top: ${({ theme }) => theme.padding.medium}px;
`

const Answer = ({ answer }: Answer) => (
  <ListItem>
    <RadioBox name="answer" value={answer} />
    {answer}
  </ListItem>
)

export default ({ answers }: Props) => (
  <form>
    <List>
      {answers.map((answer) => Answer(answer))}
      <Submit value="Vastaa" />
    </List>
  </form>
)
