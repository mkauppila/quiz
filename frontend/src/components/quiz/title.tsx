import * as React from 'react'
import styled from '../../styled'

export interface Props {
  children: any // tslint:disable-line:no-any
}

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.title}, 'serif';
  font-weight: ${({ theme}) => theme.fontWeight.semibold}
  margin-bottom: ${({ theme }) => theme.padding.medium}px
`

export default (props: Props) => (
  <Title>{props.children}</Title>
)
