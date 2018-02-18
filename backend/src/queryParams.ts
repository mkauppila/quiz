import {queryParamError} from './middleware/errorHandling'

export enum QueryParam {
  quizIdentifier,
  gameIdentifier,
  answer,
}

export function getQueryParamsOrThrowError(
  query: any,
  ...params: QueryParam[]
): any {
  const invalidParams = validateQueryParams(
    query,
    ...params
  )
  if (invalidParams && invalidParams.length > 0) {
    console.log(invalidParams)
    throw queryParamError(`Needed query params: ${invalidParams.join(', ')}`)
  } else {
    return query
  }
}

// TODO, could also check that the param itself has the correct type
export function validateQueryParams(
  query: any,
  ...params: QueryParam[]
): string[] {
  return params
    .map(param => QueryParam[param])
    .filter(name => !!query[name] === false)
}
