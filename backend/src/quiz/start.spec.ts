import { quizForIdentifier } from './start'
import { Quiz } from './types'

describe('getting correct quiz for ithe identifier', () => {
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

  it('is found', () => {
    expect(quizForIdentifier('natural', quizzes))
      .toEqual(expect.objectContaining({
        identifier: 'natural'
      }))
  })

  it('is not found', () => {
    try {
      expect(quizForIdentifier('foobar', quizzes))
    } catch (error) {
      expect(error.message).toEqual('No quiz for identifier foobar')
    }
  })
})