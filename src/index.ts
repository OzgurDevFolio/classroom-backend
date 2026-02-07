import AgentAPI from 'apminsight'
AgentAPI.config()

import express from 'express'
import subjectsRouter from './routes/subjects.js'
import usersRouter from './routes/users.js'
import classesRouter from './routes/classes.js'
import cors from 'cors'
import securityMiddleware from './middleware/security.js'

const app = express()
const PORT = 8000

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }),
)

app.use(express.json())

// app.use(securityMiddleware)

app.use('/api/subjects', subjectsRouter)
app.use('/api/users', usersRouter)
app.use('/api/classes', classesRouter)

app.get('/', (req, res) => {
    res.send('Welcome to Classroom API BACKEND!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
