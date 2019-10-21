module.exports.index = function(app, req, res){
    res.render('home/index', {validacao : {}});
}

module.exports.add_email = function(app, req, res){
    let email = req.body;
    let nodemailer = require('nodemailer');

    // Validação
    req.assert('nome', 'Nome é obrigatório').notEmpty();
    req.assert('email', 'Email é obrigatório').notEmpty();

    let erros = req.validationErrors();

    if(erros){
      res.render('home', {validacao : erros});
      return;
    }

    let db = app.config.dbConnection();
    let EmailDAO = new app.app.models.EmailDAO(db, nodemailer);

    // Salvar
    EmailDAO.inserir(email);
    // Enviar email
    EmailDAO.enviar(email);

    res.redirect('/');
}