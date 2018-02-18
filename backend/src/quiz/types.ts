export interface Quiz {
  name: string
  identifier: string
}

export interface GameStartingInfo {
  title: string
  description: string
  gameToken: string
  firstQuestion: Question
}

export interface Answer {
  answer: string
  identifier: string // identify the answer when user is answering the question
}

export interface Question {
  question: string
  answers: Answer[]
}
