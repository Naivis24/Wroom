let model = require('../../models/connexion.js');

   // //////////////////////// L I S T E R  E C U R I E S

module.exports.SeConnecter = function(request, response){
  var login = request.params.lettre;
  var passwd = request.params.lettre;
   response.title = 'Connexion';
    model.getLogin(login, passwd, function (err, result) {
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
        response.login = result;
        console.log(result);
        //request.session.login =
        response.render('listerEcurie', response);
  });
}
