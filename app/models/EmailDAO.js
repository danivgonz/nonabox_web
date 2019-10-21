function EmailDAO(db) {
    this._db = db;
}

EmailDAO.prototype.inserir = function (email) {
    let data = {
        nome: email.nome,
        email: email.email,
      };
      
    let setDoc = this._db.collection('email').add(data).then(ref => {
        console.log('Email inserido com sucesso! Id: ', ref.id);
    });
}

module.exports = function () {
    return EmailDAO;
}