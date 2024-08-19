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
