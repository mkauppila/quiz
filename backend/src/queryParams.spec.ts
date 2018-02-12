import { QueryParams, validateQueryParams } from './queryParams'

describe('validating query params', () => {
  it('should not return error valid query param', () => {
    expect(
      validateQueryParams(
        {gameIdentifier: 'foo'},
        QueryParams.gameIdentifier
      )
    ).toMatchObject([])
  })

  it('can handle several valid query params', () => {
    expect(
      validateQueryParams(
        {gameIdentifier: 'foo', answer: 'bar'},
        QueryParams.gameIdentifier,
        QueryParams.answer
      )
    ).toMatchObject([])
  })

  it('returns the names of invalid query parameter', () => {
    expect(
      validateQueryParams(
        {},
        QueryParams.gameIdentifier,
        QueryParams.answer
      )
    ).toMatchObject(['gameIdentifier', 'answer'])
  })
})
