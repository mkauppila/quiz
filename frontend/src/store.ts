import { createStore, AnyAction } from 'redux'

export interface State {
  title: String
  question: String
  answers: Array<{
    answer: string
  }>
}

const initialState = {
  title: 'Supernatural Quiz',
  question: 'How many seasons of Supernatural has been produced?',
  answers: [
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
}

const dummyReducer = (state = initialState, action: AnyAction) => {
  console.log(`action ${JSON.stringify(action)}`)
  return state
}

export default createStore(dummyReducer)