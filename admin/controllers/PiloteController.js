let model = require('../../models/pilote.js');
let modelEcurie = require('../../models/ecurie.js');

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
}

module.exports.listeAllPilotes = function (request, response){
  response.title = "Pilote existant";
  model.getAllPilotes(function (err, result) {
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
      response.listeAllPilotes = result;
      response.render('listePilotes', response);
});
}

// INSERTION
module.exports.nouveauPilote = function (request, response){
  response.title = "Ajouter un pilote";
      model.getAllNatio(function (err, result) {
          if (err) {
              // gestion de l'erreur
              console.log(err);
              return;
          }
          response.listeNatio = result;
        });

        modelEcurie.getListeEcurie(function (err, result) {
            if (err) {
                // gestion de l'erreur
                console.log(err);
                return;
            }
            response.listeEcurie = result;
            response.render('nouveauPilote', response);
          });
}

module.exports.ajouterPilote = function (request, response){
      response.title = "Ajouter un pilote";

      var pre = request.body.pre;
      var nom = request.body.nom;
      var jour = request.body.jour;
      var mois = request.body.mois;
      var annee = request.body.annee;
      var natio = request.body.natio;
      var ecurie = request.body.ecurie;
      var points = request.body.points;
      var poids = request.body.poids;
      var taille = request.body.taille;
      var description = request.body.description;

      model.ajouterPilote(pre, nom, jour, mois, annee, points, poids, taille, description, natio, ecurie, function (err, result) {
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
module.exports.modifierPilote = function (request, response){
  response.title = "Modifier un pilote";
  var pilnum = request.params.pilnum;
      model.get1Pilote(pilnum, function (err, result) {
          if (err) {
              // gestion de l'erreur
              console.log(err);
              return;
          }
          response.lePilote = result;
          console.log(response.lePilote);
        });

      model.getAllNatio(function (err, result) {
          if (err) {
              // gestion de l'erreur
              console.log(err);
              return;
          }
          response.listeNatio = result;
        });

        modelEcurie.getListeEcurie(function (err, result) {
            if (err) {
                // gestion de l'erreur
                console.log(err);
                return;
            }
            response.listeEcurie = result;
            response.render('modifierPilote', response);
          });
}

module.exports.enregistrerModificationsPilote = function (request, response){
      response.title = "Modifier un pilote";
      var pilnum = request.params.pilnum;

      var pre = request.body.pre;
      var nom = request.body.nom;
      var jour = request.body.jour;
      var mois = request.body.mois;
      var annee = request.body.annee;
      var natio = request.body.natio;
      var ecurie = request.body.ecurie;
      var points = request.body.points;
      var poids = request.body.poids;
      var taille = request.body.taille;
      var description = request.body.description;

      model.modifierPilote(pilnum, pre, nom, jour, mois, annee, points, poids, taille, description, natio, ecurie, function (err, result) {
          if (err) {
              // gestion de l'erreur
              console.log(err);
              return;
          }
          if(result.affectedRows == "1"){
            response.res = true;
          }
          response.render('succesRequeteModification', response);
        });
}

// SUPPRESSION
module.exports.confirmationSuppressionPilote = function (request, response){
  response.title = "Supprimer un pilote";
  var pilnum = request.params.pilnum;
      model.get1Pilote(pilnum, function (err, result) {
          if (err) {
              // gestion de l'erreur
              console.log(err);
              return;
          }
          response.lePilote = result;
          console.log(response.lePilote);
          response.render('supprimerPilote', response);
        });
}

module.exports.supprimerPilote = function (request, response){
      response.title = "Supprimer un pilote";
      var pilnum = request.params.pilnum;

      async.parallel([
        function(callback){
          model.supprimerPilote(pilnum, function (err, result){callback(null, result)});},
      ],
      function (err, result) {
          if (err) {
              // gestion de l'erreur
              console.log(err);
              return;
          }
          response.letext = result[0];
          response.letext = result[1];
          if(result.affectedRows == "1"){
            response.res = true;
          }
          response.render('succesRequeteSuppression', response);
        });
}
