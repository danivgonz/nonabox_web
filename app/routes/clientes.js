module.exports = function(app){

app.get('/clientes', function(req, res){

var connection = app.config.dbConnection();
var ClientesDAO = new app.app.models.ClientesDAO(connection);

  ClientesDAO.getClientes(function(error, result){
        res.render('clientes/clientes', {clientes : result });
  });
});
}
