module.exports = function(app){
  app.get('/login', function(req, res){
    app.app.controllers.login.form_login_usuario(app, req, res);
  })
}