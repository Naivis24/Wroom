let model = require('../models/circuit.js');

// ////////////////////// L I S T E R     C I R C U I T S

module.exports.ListerCircuit = function(request, response){
    response.title = 'Liste des circuits';
    model.getListeCircuits( function(err, result){
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
  		response.listeDesCircuit = result;
  		console.log(response.listeDesCircuit);
    	response.render('listerCircuit', response);

    });
}
