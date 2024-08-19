import express from 'express'
import connection from '../infra/conexao.js'

const app = express()


//indicar para ler dados em json
app.use(express.json())


// retornar o objeto por id
function buscarSelecaoPorid(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

// pegar a posição ou index array
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

// ROTAS

app.get('/selecoes', (req, res) => {
    // res.status(200).send(selecoes) 
    const sql = "SELECT * FROM selecoes;"
    connection.query(sql, (error, results) => {
        if (error) {
            console.log(error)
            res.status(404).json({ 'erro:': error })
        } else {
            res.status(200).json(results);
        }
    })
})

app.get('/selecoes/:id', (req, res) => {
    // res.json(buscarSelecaoPorid(req.params.id)) 
    const id = req.params.id
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    connection.query(sql, id, (error, results) => {
        const linha = results[0]
        if (error) {
            console.log(error)
            res.status(404).json({ 'erro:': error })
        } else {
            res.status(200).json(linha);
        }
    })
})

app.post('/selecoes', (req, res) => {
    const selecao = req.body
    const sql = "INSERT INTO selecoes SET ?;"
    connection.query(sql, selecao, (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).json({ 'erro:': error })
        } else {
            res.status(201).json(results);
        }
    })
})

app.delete('/selecoes/:id', (req, res) => {
    //     let index = buscarIndexSelecao(req.params.id)
    //    selecoes.splice(index , 1)
    //    res.send(`Seleção com id ${req.params.id} excluida com sucesso!`)
    const id = req.params.id
    const sql = "DELETE FROM selecoes WHERE id=?;"
    connection.query(sql, id, (error, results) => {
        if (error) {
            console.log(error)
            res.status(404).json({ 'erro:': error })
        } else {
            res.status(200).json(results);
        }
    })
})

app.put('/selecoes/:id', (req, res) => {
    // let index = buscarIndexSelecao(req.params.id)
    // selecoes[index].selecao = req.body.selecao
    // selecoes[index].grupo = req.body.grupo
    // res.json(selecoes)

    // if (selecoes.index === 0) {
    //     return console.log("Dados inexistentes")
    // }
    const id = req.params.id
    const selecao = req.body
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    connection.query(sql, [selecao, id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).json({ 'erro:': error })
        } else {
            res.status(200).json(results);
        }
    })
})


export default app

