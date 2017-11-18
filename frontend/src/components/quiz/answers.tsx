import * as React from 'react'

interface Answer {
  answer: string
}

interface Props {
  answers: Answer[]
}

const Answer = ({ answer }: Answer) => (
  <li><input type="radio" name="answer" value={answer} />{answer}</li>
)

export default ({ answers }: Props) => (
  <form action="something here">
    <ul>
      {answers.map((answer) => Answer(answer))}
      <input type="submit" name="answer" value="Vastaa" />
    </ul>
  </form>
)
