let model = require('../../models/connexion.js');

   // //////////////////////// L I S T E R  E C U R I E S

module.exports.SeConnecter = function(request, response){
  var login = request.body.login;
  var passwd = request.body.mdp;
   response.title = 'Connexion';
    model.getLogin(login, passwd, function (err, result) {
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
        response.login = result;
        console.log(result);
        if (response.login) {
          request.session.authenticated = true;
          request.flash('success', 'User connected');
        } else {
          request.flash('error', 'Username and password are incorrect');
        }
        response.render('authentification', response);
  });
  // you might like to do a database look-up or something more scalable here


}
