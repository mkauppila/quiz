import * as React from 'react'
import { connect } from 'react-redux'

const component = (props: any) => (
  <div>
    <p>{props.title}</p>
    <ul>
      { props.list.map((item: any) => <li key={item}>{item}</li>)}
    </ul>
  </div>
)

const mapPropsToState = (state: any) => ({
  list: state.quizzes,
  title: state.mainTitle,
})

export default connect(mapPropsToState)(component)
