import * as React from 'react'

interface Props {
  children: any // tslint:disable-line:no-any
}

export default ({ children }: Props) => (
  <div>
    {children}
  </div>
)