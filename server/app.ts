import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.routes'

const app = express()
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
)
app.use(authRoutes)

export default app
