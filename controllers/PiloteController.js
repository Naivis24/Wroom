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
        console.log(response.listeLettrePilote);
        response.render('repertoirePilotes', response);
});
}

module.exports.LettrePilote = function (request, response){
  var data = request.params.lettre;
  response.title = 'Pilotes pour la lettre '+data;
  console.log(data);

  model.getListePiloteLettre( function (err, result) {
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
      response.listeLettrePilote = result;
      console.log(response.listeLettrePilote);
});

  model.getListePiloteFor1Letter(data, function (err, result) {
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
      response.listePilotes = result;
      console.log(response.listePilotes);
      response.render('repertoirePilotesLettre', response);
});
}
