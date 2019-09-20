
function ProdutosDAO(connection){
  this._connection = connection;
}

ProdutosDAO.prototype.getProdutos = function(callback){
  this._connection.query('SELECT * FROM produto', callback);
  }

ProdutosDAO.prototype.getProduto = function(callback){
  this._connection.query('SELECT * FROM produto WHERE id_produto = 1', callback);
  }

ProdutosDAO.prototype.salvarProduto = function(produto, callback) {
  this._connection.query('INSERT INTO produto SET ? ', produto, callback);
  }

module.exports = function() {

return ProdutosDAO;

}
