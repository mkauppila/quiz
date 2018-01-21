import * as React from 'react'
import styled from '../../styled'

interface Props {
  children: string
}

const Question =  styled.div`
  margin-bottom: 12px;
`

export default ({children}: Props) => (
  <Question>
    {children}
  </Question>
)