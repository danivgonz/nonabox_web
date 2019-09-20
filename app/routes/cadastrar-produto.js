module.exports = function(app){

app.get('/cadastrar-produto', function(req, res){
  res.render('admin/form_add_produto', {validacao : {}});
});

app.post('/produtos/salvar', function(req, res){
  var produto = req.body;
  //res.send(produto);
  //res.send('Chegou na Página!!!');

  req.assert('nome', 'Nome é obrigatório').notEmpty();
  req.assert('descricao', 'Descrição é obrigatório').notEmpty();

  var erros = req.validationErrors();

  console.log(erros);


  if(erros){
    //console.log('caiu no if');
    res.render('admin/form_add_produto', {validacao : erros});
    return;
  }


  //CONEXAO
  //MODEL
  //FUNCAO
  var connection = app.config.dbConnection();
  var produtosModel = new app.app.models.ProdutosDAO(connection);

    produtosModel.salvarProduto(produto, function(error, result){
          //res.render('produtos/produtos', {produtos: result });
          res.redirect('/produtos');
    });


});

}
