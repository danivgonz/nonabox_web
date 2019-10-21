module.exports.admin = function(app, req, res) {
    let usuario = req.body;

    // Validação
    req.assert('email', 'Email é obrigatório').notEmpty();
    req.assert('senha', 'Senha é obrigatório').notEmpty();
  
    let erros = req.validationErrors();
    
    if(erros){
      res.render('login/login', {validacao : erros});
      return;
    }

    // Login
    let db = app.config.dbConnection();
    let UsuariosDAO = new app.app.models.UsuariosDAO(db);

    UsuariosDAO.loginUsuario(usuario);

    res.render('admin/index', { usuario : usuario });
}