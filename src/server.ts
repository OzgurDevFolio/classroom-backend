import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port = 8000

// Middleware to parse JSON bodies
app.use(express.json())

// Root GET route
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello from your simple Express.js server!' })
})

app.listen(port, () => {
    console.log(`🚀 Server started at http://localhost:${port}`)
})
