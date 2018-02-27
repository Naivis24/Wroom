let model = require('../models/resultat.js');

  // //////////////////////////L I S T E R    R E S U L T A T S
module.exports.ListerResultat = function(request, response){

	response.title = 'Liste des résulats des grands prix';
	model.getListePrix( function(err, result){
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
  		response.listeDesPrix = result;

	response.render('listerResultat', response);
});
}

module.exports.ResutatGrandPrix = function(request, response){
  var data = request.params.gpnum;
  response.title = 'Détails sur les résulats';

    model.getResultatGP(data, function (err, result) {
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
      response.resulat = result;
      console.log(response.resultat);
      response.render('detailsResultat', response);
  });
}
 