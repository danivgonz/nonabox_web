module.exports = function(app){
  app.get('/login', function(req, res){
    app.app.controllers.login.form_login_usuario(app, req, res);
  })

  app.post('/login/sucesso', function(req, res){
    app.app.controllers.login.login_usuario(app, req, res);
  })
}