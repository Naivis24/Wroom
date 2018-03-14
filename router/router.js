
let HomeController = require('./../controllers/HomeController');
let ResultatController = require('./../controllers/ResultatController');
let EcurieController = require('./../controllers/EcurieController');
let PiloteController = require('./../controllers/PiloteController');
let CircuitController = require('./../controllers/CircuitController');

// Routes
module.exports = function(app){

// Main Routes
    app.get('/', HomeController.Index);

// pilotes
    app.get('/repertoirePilote', PiloteController.Repertoire);

	// pilotes pour une lettre
	    app.get('/repertoirePiloteLettre/:lettre', PiloteController.LettrePilote);

	// details sur un pilote
	    app.get('/detailsPilote/:pilnum', PiloteController.DetailsSurUnPilote)

 // circuits
   app.get('/circuits', CircuitController.ListerCircuit);

   //détails d'un circuit
   app.get('/detailCircuit/:cirnum', CircuitController.DetailsSurUnCircuit);

// Ecuries
   app.get('/ecuries', EcurieController.ListerEcurie);

  // ecuries d'un pays
   app.get('/detailEcurie/:ecunum', EcurieController.ListerEcurieFor1Pays);

 //Résultats
   app.get('/resultats', ResultatController.ListerResultat);

   //détails résultats
   app.get('/detailsResultat/:gpnum', ResultatController.ResultatGrandPrix);


// tout le reste
  app.get('*', HomeController.Index);
  app.post('*', HomeController.Index);

};
