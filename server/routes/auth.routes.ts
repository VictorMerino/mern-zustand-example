import { Router } from 'express'
import { loginHandler, profileHandler } from '../controllers/auth.controller'
import { requireAuth } from '../middlewares/requireAuth'

const router = Router()

// This endpoint is POST because it should send email and password in the real world
router.post('/login', loginHandler)

router.get('/profile', requireAuth, profileHandler)
export default router
