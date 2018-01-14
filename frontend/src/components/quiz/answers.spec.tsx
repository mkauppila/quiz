import * as React from 'react'
import { shallow } from 'enzyme'
import Answers from './answers'

const answers = [
  {
    answer: '8 seasons'
  },
  {
    answer: '14 seasons'
  },
  {
    answer: '12 seasons'
  },
  {
    answer: '6 seasons'
  },
]

describe('anwers component', () => {
  it('a', () => {
    const component = shallow(<Answers answers={answers} action={() => {}} />)
    expect(component).toMatchSnapshot()
  })
})