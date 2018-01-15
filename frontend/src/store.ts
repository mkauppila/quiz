import { createStore, AnyAction } from 'redux'

export interface State {
  title: String
  question: String
  answers: Array<{
    answer: string
  }>
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

const dummyReducer = (state = initialState, action: AnyAction) => {
  console.log(`action ${JSON.stringify(action)}`)
  if (action.type === 'change-title')  {
    return {
      ...state,
      title: 'heh',
    }
  } else {
    return state
  }
}

export default createStore(dummyReducer)