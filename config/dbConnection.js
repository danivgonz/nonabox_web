var mysql = require('mysql');

var conecMySQL = function() {
  console.log('Conexao foi estabelecida');
  return mysql.createConnection(
  {
    host : 'localhost',
    user : 'root',
    password : 'labfiap#2019$',
    database : 'sistema_produtos'
  }
);
}

module.exports = function(){ // abre funcao
  console.log('O Autoload carregou o módulo de conexão');
  return conecMySQL;
} // fecha funcao
