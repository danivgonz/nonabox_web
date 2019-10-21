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

UsuariosDAO.prototype.buscarUsuarios = function () {
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

UsuariosDAO.prototype.loginUsuario = function (user) {
    let usersRef = this._db.collection('users');
    let query = usersRef.where('email', '==', user.email).where('senha', '==', user.senha).get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('Usuário não cadastrado!');
          return;
        }
    
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
}

module.exports = function () {
    return UsuariosDAO;
}