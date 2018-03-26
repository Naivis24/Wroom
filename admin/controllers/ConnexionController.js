let model = require('../../models/connexion.js');
let crypto = require('crypto');

   // //////////////////////// L I S T E R  E C U R I E S

module.exports.SeConnecter = function(request, response){
  var login = request.body.login;
  var passwd = request.body.mdp;

  var shasum = crypto.createHash('sha1');
  var mdp = shasum.update(passwd).digest('hex');

  response.title = 'Connexion';
  model.getLogin(login, mdp, function (err, result) {
    if (err) {
      // gestion de l'erreur
      console.log(err);
      return;
    }
    response.login = result;
    if (result != "") {
      request.session.authenticated = true;
      response.render('home', response);
    } else {
      response.render('home', response);
    }
  });
}
