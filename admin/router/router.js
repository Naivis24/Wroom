let HomeController = require('./../controllers/HomeController');
//let ResultatController = require('./../controllers/ResultatController');
//let EcurieController = require('./../controllers/EcurieController');
//let PiloteController = require('./../controllers/PiloteController');
//let CircuitController = require('./../controllers/CircuitController');
let ConnexionController = require('./../controllers/ConnexionController');

// Routes
module.exports = function(app){

// Main Routes
    app.get('/', HomeController.Index);

// connexion
    app.get('/', ConnexionController.SeConnecter);






// tout le reste
app.get('*', HomeController.Index);
app.post('*', HomeController.Index);

};
