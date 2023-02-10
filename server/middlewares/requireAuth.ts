import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization

  let status = 401
  if (!authHeader)
    return res.status(status).json({ message: 'Unauthorized (no Auth header)' })
  const [bearerString, token] = authHeader.split(' ')
  if (bearerString !== 'Bearer')
    return res.status(status).json({ message: 'Unauthorized (no Bearer)' })

  console.log({ bearerString, token })

  verify(token, 'secret-fafdasdfadsdfas', (err, user) => {
    if (err)
      return res.status(status).json({ message: 'Unauthorized (bad secret)' })

    status = 200
    next()
  })
}
