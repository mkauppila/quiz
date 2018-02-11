import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export interface State {
  title: String
  question: String
  answers: Array<{
    answer: string
  }>
  quizzes: String[]
  mainTitle: String
}

const initialState = {
  mainTitle: 'Main title',
  quizzes: [
    'Supernatural quiz',
    'Donald Duck quiz',
  ],
  // refactor to separate store?
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

import { DummyActionSuccess, DUMMY_ACTION_SUCCESS } from './actions/dummyAction'

const dummyReducer = (state = initialState, action: DummyActionSuccess) => {
  switch (action.type) {
    case DUMMY_ACTION_SUCCESS:
      return {
        ...state,
        title: action.title,
      }
    default:
      return state
  }
}

export default createStore(dummyReducer, applyMiddleware(thunk))