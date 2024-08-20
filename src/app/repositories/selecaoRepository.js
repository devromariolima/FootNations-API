import {consulta} from '../database/conexao.js'

class SelecaoRepository{
    // CRUD
create(selecao) {
    const sql = "INSERT INTO selecoes SET ?"
    return consulta(sql, selecao, 'Não foi possivel cadastrar a seleção!')
}

findAll(){
    const sql = "SELECT * FROM selecoes;"
    return consulta(sql, 'erro ao realzar consulta!')
}

findByid(id) {
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    return consulta(sql, id, 'erro ao realzar consulta!')
}

update(selecao, id){
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    return consulta(sql, [selecao, id], 'erro ao realzar atualizar dados!')
}

delete(id){
    const sql = "DELETE FROM selecoes WHERE id=?;"
    return consulta(sql, id, 'erro ao remover dados!')
}


}

export default new SelecaoRepository()