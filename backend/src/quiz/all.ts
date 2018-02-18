import { Quiz } from './types'
import data from '../data'

export function getQuizListing(): Quiz[] {
  return data.map(quiz => ({
    identifier: quiz.identifier,
    name: quiz.title,
  }))
}
