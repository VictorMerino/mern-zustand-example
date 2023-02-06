import { Router } from 'express'
import { loginHandler } from '../controllers/auth.controller'

const router = Router()

// This endpoint is POST because it should send email and password in the real world
router.post('/login', loginHandler)
export default router
