import * as React from 'react'

interface Props {
  questions: string[]
}

export default (props: Props) => (
  <form action="something here">
    <ul>
      <li><input type="radio" name="answer" value="8s" />8 season</li>
      <li><input type="radio" name="answer" value="5s" />5 seasons</li>
      <li><input type="radio" name="answer" value="12s" />12 seasons</li>
      <li><input type="radio" name="answer" value="14s" />14 seasons</li>
      <input type="submit" name="answer" value="Vastaa" />
    </ul>
  </form>
)
