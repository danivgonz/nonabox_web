module.exports = function(app){

  app.get('/', function(req, res){
    app.app.controllers.home.index(app, req, res);
  });
  
  app.post('/salvar', function(req, res){
    app.app.controllers.home.add_email(app, req, res);
  });
}
