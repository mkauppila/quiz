import * as React from 'react'
import { State } from './index'

export default (props: State) => (
  <div>
    <p>{props.title}</p>
    <ul>
      {props.list.map((item: string) => <li key={item}>{item}</li>)}
    </ul>
  </div>
)
