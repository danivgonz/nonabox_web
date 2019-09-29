module.exports.form_add_usuario = function(app, req, res) {
    res.render('cadastrar/cadastrar');
}

module.exports.add_usuario = function(app, req, res){
    var usuario = req.body;

    console.log(usuario)

    var firebase = app.config.dbConnection();
    var UsuariosDAO = new app.app.models.UsuariosDAO(firebase);

    UsuariosDAO.inserirUsuario(1, 'Italo', 'italo@teste.com', '24/12/1996', '11978541254', 'M', 'testando')
    res.redirect('/');
}