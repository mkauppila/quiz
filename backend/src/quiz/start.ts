// GET /start?quiz-identifier=3993&game-identifier=4994
//  start game with identifier and return the first question (and game id)
//  returns also game token used for the subsequent requests
//  objects: Questions (inc. answers), Title (game info?)

import data, { QuizData, QuestionData, AnswerData } from '../data'
import { Quiz, GameStartingInfo, Question, Answer } from './types'

import * as uuid from 'uuid/v4'

export function quizForIdentifier(
  identifier: string,
  allQuizzes: QuizData[]
): QuizData {
  const quiz = allQuizzes.find(quiz => quiz.identifier === identifier)
  if (!!quiz) {
    return quiz
  } else {
    throw new Error(`No quiz for identifier ${identifier}`)
  }
}

export function generateGameIdentifier() {
  return uuid()
}

export function answersFromAnswerData(
  data: AnswerData[]
): Answer[] {
  return data.map(a => ({
    answer: a.answer,
    identifier: 'aa' // TODO generate proper identifier for this 'game-identifier+answer-identifier', hash?
  }))
}

export function firstQuestion(
  quizData: QuizData
): Question {
  const data = quizData.questions.find(question => question.ordering === 0)
  if (!data) {
    throw new Error(`Now questions available for ${quizData.identifier}`)
  } else {
    return {
      question: data.question,
      answers: answersFromAnswerData(data.answers)
    }
  }
}

export function start(
  quizIdentifier: string
): GameStartingInfo {
  const quizData = quizForIdentifier(quizIdentifier, data)
  const gameIdentifier = generateGameIdentifier()

  return {
    gameToken: gameIdentifier,
    title: quizData.title,
    description: quizData.description,
    firstQuestion: firstQuestion(quizData) || {} as Question
  }
}

