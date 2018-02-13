/*
* config.Db contient les parametres de connection à la base de données
* il va créer aussi un pool de connexions utilisables
* sa méthode getConnection permet de se connecter à MySQL
*
*/

let db = require('../configDb');

/*
* Récupérer l'intégralité les écuries avec l'adresse de la photo du pays de l'écurie
* @return Un tableau qui contient le N°, le nom de l'écurie et le nom de la photo du drapeau du pays
*/
module.exports.getListePiloteLettre = function (callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL

						let sql ="select distinct substring(PILNOM , 1, 1) as lettre from pilote order by lettre;";
						console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.getListePiloteFor1Letter = function (lettre, callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL

						let sql ='select pilnum, paynum, pilnom, pilprenom, pildatenais, pilpigiste, pilpoints, pilpoids, piltaille, piltexte, ecunum from pilote where substring(pilnom , 1, 1)="'+lettre+'";';
						console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.get1Pilote = function (pilnum, callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL

						let sql ="select pilnum, paynum, pilnom, pilprenom, pildatenais, pilpigiste, pilpoints, pilpoids, piltaille, piltexte, ecunum from pilote where pilnum=;";
						console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};
