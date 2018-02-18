import * as express from 'express'
import * as queryParams from './middleware/queryParams'
import * as errorHandling from './middleware/errorHandling'
import { queryParamError } from './middleware/errorHandling';
import { getQueryParamsOrThrowError, QueryParam } from './queryParams'

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

// Convert query param keys to camel case
app.use(queryParams.toCamelCase)

// return all the quizzes
app.get('/', (req, res) => {
  res.json(quizzes)
})

// GET /start?quiz-identifier=3993&game-identifier=4994
//  start game with identifier and return the first question (and game id)
//  returns also game token used for the subsequent requests
//  objects: Questions (inc. answers), Title (game info?)
app.get('/start', (req, res) => {
  const {quizIdentifier, gameIdentifier} = getQueryParamsOrThrowError(
    req.query,
    QueryParam.quizIdentifier, QueryParam.gameIdentifier
  )
  console.log(quizIdentifier)

  res.json({hello: 'world'})
})
// GET /question?token=884848&answer=[option]
//  answer the current question for the active game and return new question
//  objects: Questions (inc. answers)
app.get('/question', (req, res) => {
  const {gameIdentifier, answer} = req.query
  if (!!gameIdentifier === false || !!answer === false) {
    throw queryParamError('Needs both gameIdentifierd and asnwer query params')
  }
  res.json({hello: 'world'})
})

// Error handling middleware is defined last after the routes and other middleware functions
app.use(errorHandling.logError)
app.use(errorHandling.errorResponse)

app.listen(3000, undefined)
