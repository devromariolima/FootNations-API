import connection from '../database/conexao.js'

class SelecaoRepository{
    // CRUD
create(selecao) {
    const sql = "INSERT INTO selecoes SET ?"
    return new Promise ((resolve , reject) => {
        connection.query(sql, selecao,(error, results) => {
            if(error ){
                return reject("não foi possivel cadastrar dados!")
            }
                const row = JSON.parse(JSON.stringify(results))
                return resolve(row)
        })
    })
}

findAll(){
    const sql = "SELECT * FROM selecoes;"
    return new Promise ((resolve , reject) => {
        connection.query(sql, (error, results) => {
            if(error ){
                return reject("Erro ao realizar consulta")
            } else {
                const row = JSON.parse(JSON.stringify(results))
                return resolve(row)
            }
        })
    })
}

findByid(id) {
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    return new Promise ((resolve , reject) => {
        connection.query(sql, id,(error, results) => {
            if(error ){
                return reject("Erro ao realizar consulta")
            } else {
                const row = JSON.parse(JSON.stringify(results))
                return resolve(row)
            }
        })
    })
}

update(selecao, id){
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    return new Promise ((resolve , reject) => {
        connection.query(sql, [selecao, id],(error, results) => {
            if(error ){
                return reject("Erro ao atualizar dados")
            } else {
                const row = JSON.parse(JSON.stringify(results))
                return resolve(row)
            }
        })
    })
}

delete(id){
    const sql = "DELETE FROM selecoes WHERE id=?;"
    return new Promise ((resolve , reject) => {
        connection.query(sql, id,(error, results) => {
            if(error ){
                return reject("Erro ao remover dados")
            } else {
                const row = JSON.parse(JSON.stringify(results))
                return resolve(row)
            }
        })
    })
}


}

export default new SelecaoRepository()