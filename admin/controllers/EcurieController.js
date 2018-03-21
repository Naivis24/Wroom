let model = require('../models/ecurie.js');

   // //////////////////////// L I S T E R  E C U R I E S

module.exports.ListerEcurie = function(request, response){
   response.title = 'Liste des écuries';
    model.getListeEcurie( function (err, result) {
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
        response.listeEcurie = result;
        response.render('listerEcurie', response);
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
