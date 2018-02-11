import * as express from 'express'

interface Quiz {
  name: string
  identifier: string
}

interface GameInfo {
  title: string
  description: string
  gameToken: string
}

interface Answer {
  answer: string
  identifier: string // identify the answer when user is answering the question
}

interface Question {
  question: string
  answers: Answer[]
}

const quizzes = [
  {
    name: 'Supernatural quiz',
    identifier: 'natural',
  },
  {
    name: 'Donald Duck quiz',
    identifier: 'donald',
  },
] as Quiz[]

const app = express()

// return all the quizzes
app.get('/', (req, res) => {
  res.json(quizzes)
})

// GET /start?quiz-identifier=3993&client-id=4994
//  start game with identifier and return the first question (and game id)
//  returns also game token used for the subsequent requests
//  objects: Questions (inc. answers), Title (game info?)

// GET /question?token=884848&answer=[option]
//  answer the current question for the active game and return new question
//  objects: Questions (inc. answers)

app.listen(3000, undefined)
