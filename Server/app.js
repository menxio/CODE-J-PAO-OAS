import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRouter from './routes/auth.js'
import adminRouter from './routes/admin.js'
import employeeRouter from './routes/employee.js'
import userRouter from './routes/user.js'
import './config/db.js'
import cors from 'cors'
import sendError from './utils/sendError.js'

const app = express()
const port = 3000

const __dirname = dirname(fileURLToPath(import.meta.url))

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB')
})

// Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cors())

app.use('/admin', adminRouter)
app.use('/employee', employeeRouter)
app.use('/user', userRouter)
app.use('/auth', authRouter)

app.use('*', (req, res) => {
  console.log('unhandled request')
  return sendError('API endpoint not found', 404, res)
})

// Server
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
  // console.log(__dirname)
})
