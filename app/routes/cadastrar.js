module.exports = function(app){
  app.get('/cadastrar', function(req, res){
    app.app.controllers.cadastrar_usuario.form_add_usuario(app, req, res);
  })

  app.post('/cadastrar/deu-certo', function(req, res){
    app.app.controllers.cadastrar_usuario.add_usuario(app, req, res);
  })
 
 
  app.get('/teste', function(req, res){
    let db = app.config.dbConnection;

    db.collection('users').get()
      .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
          });
          res.render('home/index');
      })
      .catch((err) => {
          console.log('Error getting documents', err);
      });
  });

}