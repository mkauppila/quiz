export enum QueryParams {
  quizIdentifier,
  gameIdentifier,
  answer,
}

// TODO, could also check that the param itself has the correct type
export function validateQueryParams(
  query: any,
  ...params: QueryParams[]
): string[] {
  return params
    .map(param => QueryParams[param])
    .filter(name => !!query[name] === false)
}
