module.exports = function(app){
  app.get('/cadastrar', function(req, res){
    res.render('cadastrar/cadastrar');
  })
 
 
  app.get('/teste', function(req, res){
    let db = app.config.dbConnection;

    db.collection('users').get()
      .then((snapshot) => {
          snapshot.forEach((doc) => {
          // console.log(doc.id, '=>', doc.data());
          });
          res.render('home/index');
      })
      .catch((err) => {
          console.log('Error getting documents', err);
      });
  });

}