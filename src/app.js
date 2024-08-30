import express from 'express'
import routes from './routes.js'

const app = express()

//indicar para ler dados em json
app.use(express.json())

//usar o router
app.use(routes)

export default app

