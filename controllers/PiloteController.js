let model = require('../models/pilote.js');

// ///////////////////////// R E P E R T O I R E    D E S    P I L O T E S

module.exports.Repertoire = function(request, response){
   response.title = 'Répertoire des pilotes';
    model.getListePiloteLettre( function (err, result) {
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
        response.listeLettrePilote = result;
        response.render('repertoirePilotes', response);
});

    model.getListePiloteFor1Letter( function (err, result) {
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
        response.listePilote = result;
        response.render('repertoirePilotes', response);
});
}
