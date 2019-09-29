function UsuariosDAO(firebase) {
    this._firebase = firebase;
}

UsuariosDAO.prototype.inserirUsuario = function (userId, nome, email, dataNasc, telefone, sexo, senha) {
    firebase.ref('usuarios/' + userId).set({
        nome: nome,
        email: email,
        dataNasc : dataNasc,
        telefone : telefone,
        sexo : sexo,
        senha : senha
    });
}

module.exports = function () {
    return UsuariosDAO;
}