let model = require('../../models/ecurie.js');

   // //////////////////////// L I S T E R  E C U R I E S

module.exports.SeConnecter = function(request, response){
   response.title = 'Connexion';
    model.getLogin( function (err, result) {
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
        response.listeEcurie = result;
        response.render('listerEcurie', response);
  });
}
