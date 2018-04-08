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
}

module.exports.LettrePilote = function (request, response){
  var data = request.params.lettre;
  response.title = 'Pilotes pour la lettre '+data;

  model.getListePiloteLettre( function (err, result) {
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
      response.listeLettrePilote = result;
});

  model.getListePiloteFor1Letter(data, function (err, result) {
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
      response.listePilotes = result;
      response.render('repertoirePilotesLettre', response);
});
}

module.exports.DetailsSurUnPilote = function (request, response){
  var data = request.params.pilnum;
  response.title = 'Détails sur le pilote';

  model.getListePiloteLettre( function (err, result) {
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
      response.listeLettrePilote = result;
  });

  model.getPhotoProfilFor1Pilote(data, function (err, result) {
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
      response.photoProfil = result;
  });

  model.getSponsorFor1Pilote(data, function (err, result) {
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
      response.lesSponsors = result;
  });

  model.getPhotoFor1Pilote(data, function (err, result) {
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
      response.lesPhotos = result;
  });

  model.get1PhotoFor1Pilote(data, function (err, result) {
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
      response.laPhoto = result;
  });

  model.get1EcurieFor1Pilote(data, function (err, result) {
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
      response.lecurie = result;
  });

  model.get1Pilote(data, function (err, result) {
      if (err) {
          // gestion de l'erreur
          console.log(err);
          return;
      }
      response.lePilote = result;
      response.render('detailsPilote', response);
  });
}
