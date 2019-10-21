function UsuariosDAO(db) {
    this._db = db;
}

UsuariosDAO.prototype.inserirUsuario = function (user) {
    let data = {
        nome: user.nome,
        email: user.email,
        dataNasc : user.dataNasc,
        telefone : user.telefone,
        sexo : user.sexo,
        senha : user.senha
      };
      
    let setDoc = this._db.collection('users').add(data).then(ref => {
        console.log('Usuário inserido com sucesso! Id: ', ref.id);
    });
}

UsuariosDAO.prototype.getUsuarios = function () {
    this._db.collection('users').get()
      .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
          });
      })
      .catch((err) => {
          console.log('Error getting documents', err);
      });
}

module.exports = function () {
    return UsuariosDAO;
}