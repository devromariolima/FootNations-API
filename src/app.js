import express from 'express'
import selecaoController from './app/controllers/selecaoController.js'

const app = express()


//indicar para ler dados em json
app.use(express.json())


// ROTAS
app.get('/selecoes', selecaoController.index)
app.get('/selecoes/:id', selecaoController.show)
app.post('/selecoes', selecaoController.store)
app.delete('/selecoes/:id',selecaoController.delete)
app.put('/selecoes/:id', selecaoController.update)


export default app

