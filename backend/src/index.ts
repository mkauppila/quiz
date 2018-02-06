import * as express from 'express'

interface Quiz {
  name: string
  identifier: string
}

interface GameInfo {
  title: string
  description: string
}

interface Answer {
  answer: string
  identifier: string // identify the answer when user is answering the question
}

interface Question {
  question: string
  answers: Answer[]
}


// GET /quizzes
//   returns all the lists

// GET /start?quiz-identifier=3993&client-id=4994
//  start game with identifier and return the first question (and game id)
//  returns also game token used for the subsequent requests
//  objects: Questions (inc. answers), Title (game info?)

// GET /question?token=884848&answer=[option]
//  answer the current question for the active game and return new question
//  objects: Questions (inc. answers)

const app = express()
app.get('/', (req, res) => {
  res.json({hello: 'world'})
})

app.listen(3000, undefined)
