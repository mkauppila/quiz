import { Request, Response, NextFunction } from 'express'

interface RequestError {
  statusCode: number
  error: Error
}

export function queryParamError(message: string): RequestError {
  return {
    statusCode: 400,
    error: new Error(message)
  }
}

export function logError(error: RequestError, req: Request, res: Response, next: NextFunction) {
  next(error)
}

export function errorResponse(error: RequestError, req: Request, res: Response, next: NextFunction) {
  const err = error.error
  res
    .status(error.statusCode)
    .json(
      {
        error: {
          message: err.message,
          name: err.name,
          stack: err.stack
        }
      }
  )
}
