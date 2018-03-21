let model = require('../models/home.js');

  // ////////////////////////////////////////////// A C C U E I L
module.exports.Index = function(request, response){
    response.title = "Bienvenue sur le site de WROOM (IUT du Limousin).";
    response.render('home', response);
};

module.exports.GetDernierResultat = function(request, response){
    response.title = 'Dernier Resultat';
    model.getDernierResultat( function(err, result){
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
  		response.dernierresultat = result;
  		console.log(dernierresultat);
    	response.render('home', response);
    });
}