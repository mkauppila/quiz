import * as React from 'react'

const list = [
  'Supernatural quiz',
  'Donald Duck quiz'
]

export default (props: any) => (
  <ul>
    { list.map(item => <li key={item}>{item}</li>)}
  </ul>
)
