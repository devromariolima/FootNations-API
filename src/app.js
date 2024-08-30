import express from 'express'
import routes from './routes.js'

const app = express()

//usar o router
app.use(routes)

//indicar para ler dados em json
app.use(express.json())


export default app

