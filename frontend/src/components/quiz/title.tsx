import * as React from 'react'
import styled from '../../styled'

export interface Props {
  children: any // tslint:disable-line:no-any
}

const Title = styled.h1`
  font-family: 'Vollkorn SC', 'serif';
  font-weight: 600;
`

export default (props: Props) => (
  <Title>{props.children}</Title>
)
