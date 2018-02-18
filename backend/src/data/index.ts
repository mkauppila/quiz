
export interface AnswerData {
  answer: string
  isCorrect: boolean
}

export interface QuestionData {
  ordering: number
  question: string
  answers: AnswerData[]
}

export interface QuizData {
  identifier: string
  title: string
  description: string
  questions: QuestionData[]
}

export default [
  {
    title: 'Supernatural quiz',
    identifier: 'natural',
  },
  {
    title: 'Donald Duck quiz',
    identifier: 'donald',
  },
] as QuizData[]