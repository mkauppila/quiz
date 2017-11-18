import * as React from 'react'

export interface Props {
  children: any // tslint:disable-line:no-any
}

export default (props: Props) => (
  <div>{props.children}</div>
)
