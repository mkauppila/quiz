import * as React from 'react'
import styled from '../../styled'
import { Link } from 'react-router-dom'

import { State } from './index'
import Title from '../quiz/title'

const LinkListItem = ({ item }: { item: string }) => {
  const ListItem = styled.li`
  `

  return (
    <Link to="/quiz">
      <ListItem key={item}>{item}</ListItem>
    </Link>
  )
}

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default (props: State) => (
  <FlexWrapper>
    <div>
      <Title>{props.title}</Title>
      <ul>
        {props.list.map((item: string) => <LinkListItem key={item} item={item} />)}
      </ul>
    </div>
  </FlexWrapper>
)
