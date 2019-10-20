module.exports.index = function(app, req, res){
    res.render('home/index');
}

module.exports.add_email = function(app, req, res){
    let email = req.body;

    req.assert('nome', 'Nome é obrigatório').notEmpty();
    req.assert('email', 'Email é obrigatório').notEmpty();

    let erros = req.validationErrors();
    console.log(erros);

    // if(erros){
    //   res.render('home/cadastrar', {validacao : erros});
    //   return;
    // }

    let db = app.config.dbConnection();
    let EmailDAO = new app.app.models.EmailDAO(db);

    EmailDAO.inserir(email);

    res.redirect('/');
}