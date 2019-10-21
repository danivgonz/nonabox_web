module.exports = function(app){
    app.post('/admin', function(req, res){
      app.app.controllers.admin.admin(app, req, res);
    })

  }