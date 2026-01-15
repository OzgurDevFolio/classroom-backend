import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port: number = 8000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Classroom Backend!')
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
