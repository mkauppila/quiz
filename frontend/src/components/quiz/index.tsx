
import { connect, Dispatch } from 'react-redux'
import { State as AppState } from '../../store'
import Component from './component'
import dummyAction, { DummyAction } from '../../actions/dummyAction'

export interface State {
  title: string
  question: string
  answers: Array<{
    answer: string
  }>
  actions: () => void
}

const mapStateToProps = (state: AppState) => ({
  title: state.title,
  question: state.question,
  answers: state.answers
} as State)

const mapDispatchToProps = (dispatch: Dispatch<DummyAction>) => ({
  actions: () => {
    dispatch(dummyAction)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
