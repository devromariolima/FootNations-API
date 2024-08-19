import connection from '../database/conexao.js'

class SelecaoController {

index(req, res) {
    const sql = "SELECT * FROM selecoes;"
    connection.query(sql, (error, results) => {
        if (error) {
            console.log(error)
            res.status(404).json({ 'erro:': error })
        } else {
            res.status(200).json(results);
        }
    })
}

show(req, res) {
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
}


store(req, res){
    const selecao = req.body
    const sql = "INSERT INTO selecoes SET ?;"
    connection.query(sql, selecao, (error, results) => {
        if (error) {
            console.log(error)
            res.status(404).json({ 'erro:': error })
        } else {
            res.status(201).json(results);
        }
    })
}

update (req, res) {
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
}

delete(req, res) {
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
}


}

//padrão singleton
export default new SelecaoController()