let model = require('../../models/ecurie.js');
let modelPilote = require('../../models/pilote.js');

   // //////////////////////// L I S T E R  E C U R I E S

module.exports.listeAllEcurie = function(request, response){
   response.title = 'Liste des écuries';
    model.getListeEcurie( function (err, result) {
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
        response.listeAllEcuries = result;
        response.render('listeEcuries', response);
  });
}

module.exports.ListerEcurieFor1Pays = function(request, response){
   var data = request.params.ecunum;
   response.title = 'Detail sur l\'ecurie'+data;

     model.getListeEcurie( function (err, result) {
         if (err) {
             // gestion de l'erreur
             console.log(err);
             return;
         }
         response.listeEcurie = result;
   });

   model.getListePilotesFor1Ecurie(data, function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.listePilotes = result;
 });

   model.getListeVoitureFor1Ecurie(data, function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.listeVoitures = result;
 });

    model.getListeEcurieFor1Pays(data, function (err, result) {
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
        response.detail1Ecurie = result;
        response.render('detailEcurie', response);
  });
}


// INSERTION
module.exports.nouvelleEcurie = function(request, response){
   response.title = 'Ajouter une écurie';

   model.getAllFourn(function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.listeFourn = result;
     });

   modelPilote.getAllNatio(function (err, result) {
       if (err) {
           // gestion de l'erreur
           console.log(err);
           return;
       }
       response.listeNatio = result;
       response.render('nouvelleEcurie', response);
     });
}

module.exports.ajouterEcurie = function(request, response){
  response.title = 'Ajouter une écurie';

  var nom = request.body.nom;
  var dir = request.body.dir;
  var adr = request.body.adr;
  var pts = request.body.pts;
  var pays = request.body.pays;
  var fourn = request.body.fourn;
  var img = request.body.img;


    model.ajouterEcurie(nom, dir, adr, pts, pays, fourn, img, function(err, result){
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
  response.title = "Modifier une écurie";
  var ecunum = request.params.ecunum;
      model.getListeEcurieFor1Pays(ecunum, function (err, result) {
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
      response.title = "Modifier une écurie";
      var ecunum = request.params.ecunum;

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
  response.title = "Supprimer une écurie";
  var ecunum = request.params.ecunum;
      model.get1Pilote(ecunum, function (err, result) {
          if (err) {
              // gestion de l'erreur
              console.log(err);
              return;
          }
          response.lePilote = result;
          response.render('supprimerPilote', response);
        });
}

module.exports.supprimerPilote = function (request, response){
      response.title = "Supprimer une écurie";
      var ecunum = request.params.ecunum;

      model.supprimerPilote(ecunum, function (err, result) {
          if (err) {
              // gestion de l'erreur
              console.log(err);
              return;
          }
          if(result.affectedRows == "1"){
            response.res = true;
          }
          response.render('succesRequeteSuppression', response);
        });
}
