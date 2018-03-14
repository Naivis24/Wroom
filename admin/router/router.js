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

// pilotes
    app.get('/connexion', ConnexionController.SeConnecter);

// pilotes
    app.get('/pilotes', ConnexionController.Repertoire);

// circuits
    app.get('/circuits', PiloteController.Repertoire);

// pilotes
    app.get('/ecuries', PiloteController.Repertoire);

// pilotes
    app.get('/resultats', PiloteController.Repertoire);

// pilotes
    app.get('/sponsors', PiloteController.Repertoire);




// tout le reste
app.get('*', HomeController.Index);
app.post('*', HomeController.Index);

};
