import mysql from 'mysql2'


// Configuração da conexão
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // Usuário padrão do XAMPP
  password: '',         // Deixe vazio se você não definiu uma senha no MySQL
  database: 'selecoes'
});

connection.connect()

export default connection


// // Conectar ao banco de dados
// connection.connect(err => {
//   if (err) {
//     console.error('Erro ao conectar ao banco de dados:', err);
//     return;
//   }
//   console.log('Conectado ao banco de dados MySQL');
// });

// // Exemplo de consulta
// connection.query('SELECT * FROM sua_tabela', (err, results, fields) => {
//   if (err) {
//     console.error('Erro na consulta:', err);
//     return;
//   }
//   console.log('Resultados da consulta:', results);
// });

// // Fechar a conexão
// connection.end();
