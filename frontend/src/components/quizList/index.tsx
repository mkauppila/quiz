import Component from './component'
import { connect } from 'react-redux'
import { State as ListState } from '../../store'

export interface State {
  list: string[]
  title: string
}

const mapPropsToState = (state: ListState) => ({
  list: state.quizzes,
  title: state.mainTitle,
} as State)

export default connect(mapPropsToState)(Component)
