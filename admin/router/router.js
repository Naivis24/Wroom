let HomeController = require('./../controllers/HomeController');
let ResultatController = require('./../controllers/ResultatController');
let EcurieController = require('./../controllers/EcurieController');
let PiloteController = require('./../controllers/PiloteController');
let CircuitController = require('./../controllers/CircuitController');
let ConnexionController = require('./../controllers/ConnexionController');

// Routes
module.exports = function(app){

// Main Routes
    app.get('/', HomeController.Index);

// connexion
    app.post('/', ConnexionController.SeConnecter);

//pilotes
    app.get('/listePilotes', PiloteController.listeAllPilotes);
    app.get('/ajouterPilotes', PiloteController.nouveauPilote);
    app.post('/ajouterPilotes', PiloteController.ajouterPilote);
    app.get('/modifierPilotes/:pilnum', PiloteController.modifierPilote);
    app.post('/modifierPilotes/:pilnum', PiloteController.enregistrerModificationsPilote);
    app.get('/supprimerPilote/:pilnum', PiloteController.confirmationSuppressionPilote);
    app.post('/supprimerPilote/:pilnum', PiloteController.supprimerPilote);

// circuits
    app.get('/listeCircuits', CircuitController.listeAllCircuit);
    app.get('/ajouterCircuits', CircuitController.nouveauCircuit);
    app.post('/ajouterCircuits', CircuitController.ajouterCircuit);

// ecuries
    app.get('/listeEcuries', EcurieController.listeAllEcurie);
    app.get('/ajouterEcuries', EcurieController.nouvelleEcurie);
    app.post('/ajouterEcuries', EcurieController.ajouterEcurie);


  // tout le reste
  app.get('*', HomeController.Index);
  app.post('*', HomeController.Index);

};
