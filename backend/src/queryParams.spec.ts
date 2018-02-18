import { QueryParam, validateQueryParams } from './queryParams'

describe('validating query params', () => {
  it('should not return error valid query param', () => {
    expect(
      validateQueryParams(
        {gameIdentifier: 'foo'},
        QueryParam.gameIdentifier
      )
    ).toMatchObject([])
  })

  it('can handle several valid query params', () => {
    expect(
      validateQueryParams(
        {gameIdentifier: 'foo', answer: 'bar'},
        QueryParam.gameIdentifier,
        QueryParam.answer
      )
    ).toMatchObject([])

    expect.any(Function)

  })

  it('returns the names of invalid query parameter', () => {
    expect(
      validateQueryParams(
        {},
        QueryParam.gameIdentifier,
        QueryParam.answer
      )
    ).toMatchObject(['gameIdentifier', 'answer'])
  })
})
