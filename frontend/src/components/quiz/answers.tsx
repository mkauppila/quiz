import * as React from 'react'
import styled from '../../styled'

interface Answer {
  answer: string
}

interface Props {
  answers: Answer[]
}

const List = styled.ul`
  padding: 0
`
const ListItem = styled.li`
  list-style: none;
  margin-bottom: 8px;
`
const RadioBox = styled.input.attrs({
  type: 'radio'
})`
  margin-right: 8px;
`
const Submit = styled.input.attrs({
  type: 'submit',
})`
  margin-top: 8px;
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
