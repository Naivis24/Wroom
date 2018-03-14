let model = require('../../models/circuit.js');

// ////////////////////// L I S T E R     C I R C U I T S

module.exports.ListerCircuit = function(request, response){
    response.title = 'Liste des circuits';
    model.getListeCircuits( function(err, result){
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
  		response.listeDesCircuits = result;
    	response.render('listerCircuit', response);
    });
}

module.exports.DetailsSurUnCircuit = function(request, response){
  var data = request.params.cirnum;
  response.title = 'Détails sur le circuit';

  model.getListeCircuits( function(err, result){
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
    response.listeDesCircuits = result;
  });

    model.getInfosCircuit(data, function (err, result) {
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
      response.listeInfosCircuit = result;
      response.render('detailsCircuit', response);
  });
}
