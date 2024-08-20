import mysql from 'mysql2'


// Configuração da conexão
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // Usuário padrão do XAMPP
  password: '',         // Deixe vazio se você não definiu uma senha no MySQL
  database: 'selecoes'
});

connection.connect()
/**
 * Executa um codigo SQL com ou sem valores
 * @param {string} sql instrução sql
 * @param {string=id | [selecao, id]} valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promisse
 */

export const consulta = (sql , valores='', mensagemReject) => {
  return new Promise ((resolve , reject) => {
    connection.query(sql, valores,(error, results) => {
        if(error ){
            return reject(mensagemReject)
        }
            const row = JSON.parse(JSON.stringify(results))
            return resolve(row)
    })
})

}

export default connection
