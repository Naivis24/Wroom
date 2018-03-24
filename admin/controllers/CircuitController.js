let model = require('../../models/circuit.js');
let modelPilote = require('../../models/pilote.js');

//////////////////////// L I S T E R     C I R C U I T S

module.exports.listeAllCircuit = function(request, response){
    response.title = 'Liste des circuits';
    model.getListeCircuits( function(err, result){
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
  		response.listeAllCircuits = result;
    	response.render('listeCircuits', response);
    });
}

// INSERTION
module.exports.nouveauCircuit = function (request, response){
  response.title = "Ajouter un circuit";
      modelPilote.getAllNatio(function (err, result) {
          if (err) {
              // gestion de l'erreur
              console.log(err);
              return;
          }
          response.listeNatio = result;
          response.render('nouveauCircuit', response);
        });
}

module.exports.ajouterCircuit = function(request, response){
  response.title = 'Ajouter un circuit';

  var nom = request.body.nom;
  var long = request.body.long;
  var pays = request.body.pays;
  var nbPers = request.body.nbPers;
  var img = request.body.img;
  var description = request.body.description;

    model.ajouterCircuit(nom, long, pays, nbPers, description, img, function(err, result){
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
        if(result.affectedRows == "1"){
          response.res = true;
        }
        response.render('succesRequeteInsertion', response);
    });
}

// MODIFICATION
