module.exports = function(app){
  app.get('/cadastrar', function(req, res){
    app.app.controllers.cadastrar_usuario.form_add_usuario(app, req, res);
  })

  app.post('/cadastrar/sucesso', function(req, res){
    app.app.controllers.cadastrar_usuario.add_usuario(app, req, res);
  })
}