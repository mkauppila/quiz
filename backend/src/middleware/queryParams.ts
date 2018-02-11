import { camelCase } from 'lodash'
import { Request, Response, NextFunction } from 'express'

export function toCamelCase(req: Request, res: Response, next: NextFunction) {
  const updatedQuery: any = {}
  Object.keys(req.query).map((key) => {
    updatedQuery[camelCase(key)] = req.query[key]
  })
  req.query = updatedQuery
  next()
}
