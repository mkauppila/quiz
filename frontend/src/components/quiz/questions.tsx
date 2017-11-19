import * as React from 'react'

interface Props {
  children: string
}

export default ({ children }: Props) => (
  <div>
    {children}
  </div>
)