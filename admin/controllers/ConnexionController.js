let model = require('../../models/connexion.js');

   // //////////////////////// L I S T E R  E C U R I E S

module.exports.SeConnecter = function(request, response){
   response.title = 'Connexion';
   response.render('authentification', response);
}

module.exports.estConnecte = function(request, response){
  var login = request.body.login;
  var passwd = request.body.mdp;
  console.log("login : "+login);
  console.log("passwd : "+passwd);
  response.title = 'Connexion';
  model.getLogin(login, passwd, function (err, result) {
    if (err) {
      // gestion de l'erreur
      console.log(err);
      return;
    }
    response.login = result;
    console.log(response.login);
    if (result != "") {
      request.session.authenticated = true;
      response.render('authentifie', response);
    } else {
      response.render('authentifie', response);
    }
    console.log(request.session.authenticated);
  });
}
