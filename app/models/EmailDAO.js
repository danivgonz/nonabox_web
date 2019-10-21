function EmailDAO(db, nodemailer) {
    this._db = db;
    this._nodemailer = nodemailer;
    console.log(nodemailer)
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

EmailDAO.prototype.enviar = function (emailSend) {
    let authEmail = 'nonabox.fiap@gmail.com';
    let authPass = 'fiap2019'

    let emailHtml = '<!DOCTYPE html>' +
    `<html>` +
    `<head>` +
    `<meta charset="UTF-8">` +
    `<style>` +
    `@import url('https://fonts.googleapis.com/css?family=Saira&display=swap');` +
    `</style>` +
    `</head>` +
    `<body bgcolor="#ffffff">` +
    `<table cellpadding="0" cellspacing="0" width="600" align="center" border="0" bgcolor="#ffffff">` +
    `<tr>` +
    `<td align="center">` +
    `<font color="#2d2d2d" style="font-family: 'Saira', Arial, sans-serif;font-size: 20px; line-height: 22px;">` +
    emailSend.nome.toUpperCase() + `, BEM-VINDO(A) A` +
    `<br>` +
    `<font color="#0097a1" style="font-family: 'Saira', Arial, sans-serif;font-size: 50px; line-height: 80px;">` +
    `nona box` +
    `</font>` +
    `<br><br>` +
    `A gente já salvou seu email pra você` +
    `<br>` +
    `sempre ficar sabendo das novidades.` +
    `</font>` +
    `</td>` +
    `</tr>` +
    `</body>` +
    `</html>`; 



    let transporter = this._nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: authEmail,
            pass: authPass
        }
    });
    
    var mailOptions = {
        from: 'nonabox.fiap@gmail.com',
        to: emailSend.email,
        subject: 'Bem-vindo a nona box',
        html: emailHtml
    };
    
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
}

module.exports = function () {
    return EmailDAO;
}