
import { connect, Dispatch } from 'react-redux'
import { State as AppState } from '../../store'
import Component from './component'
import dummyAction from '../../actions/dummyAction'

const mapStateToProps = (state: AppState) => ({
  title: state.title,
  question: state.question,
  answers: state.answers
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: () => {
    dispatch(dummyAction as any)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
