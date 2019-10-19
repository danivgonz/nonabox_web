module.exports.form_add_usuario = function(app, req, res) {
    res.render('cadastrar/cadastrar', {validacao : {}, cliente : {}});
}

module.exports.add_usuario = function(app, req, res){
    let usuario = req.body;
    // console.log(usuario)
    res.send(usuario)

    req.assert('nome', 'Nome é obrigatório').notEmpty();
    req.assert('email', 'Email é obrigatório').notEmpty();
    req.assert('dataNasc', 'Data de nascimento é obrigatório').notEmpty(); 
    req.assert('telefone', 'Telefone é obrigatório').notEmpty(); 
    req.assert('sexo', 'Sexo é obrigatório').notEmpty(); 
    // req.assert('senha').custom((value, { req }) => {
    //     if (value !== usuario.confirmarSenha) {
    //       throw new Error('A confirmação da senha está incorreta!');
    //     }
    //   })
  
    let erros = req.validationErrors();
  
    console.log(erros);
    // console.log(produto);
    
    if(erros){
      res.render('cadastrar', {validacao : erros, produto : produto});
      return;
    }


    let db = app.config.dbConnection();
    console.log(db);
    let UsuariosDAO = new app.app.models.UsuariosDAO(db);

    UsuariosDAO.getUsuarios();

    res.redirect('/');
  
}