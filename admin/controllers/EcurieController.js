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
