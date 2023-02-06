import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const loginHandler = (req: Request, res: Response) => {
  // req.body = {email: 'email@email.com', pass: '01234'}
  // validators: express-validator, joi, zod...
  // store in db: mongodb, mysql, pg...
  // generate token: fdjakldfjkaslñfjkdslañ1232312321
  // BCrypt o Crypto para el Toekn

  const token = jwt.sign(
    {
      test: 'test',
    },
    'secret-fafdasdfadsdfas',
    {
      expiresIn: 60 * 60 * 24,
    }
  )

  return res.json({ token })
}
