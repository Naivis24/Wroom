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

						let sql ='select h.phoadresse, p.pilnum, paynum, pilnom, pilprenom, pildatenais, pilpigiste, pilpoints, pilpoids, piltaille, piltexte, ecunum from pilote p, photo h where h.pilnum=p.pilnum and phosujet="Photo identité" and pilnom like "'+lettre+'%";';
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

						let sql = 'select y.paynat, h.phoadresse, p.pilnum, p.paynum, pilnom, pilprenom, DATE_FORMAT(pildatenais, "%d/%m/%Y"), pilpigiste, pilpoints, CONVERT(pilpoids, char) as pilpoids, CONVERT(piltaille, char) as piltaille, piltexte, ecunum from pilote p, photo h, pays y where y.paynum=p.paynum and h.pilnum=p.pilnum and phosujet="Photo identité" and p.pilnum='+pilnum+';';
						connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};

module.exports.getSponsorFor1Pilote = function (pilnum, callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL

						let sql = 'select r.sponom, r.sposectactivite from pilote p, sponsorise s, sponsor r where p.pilnum=s.pilnum and s.sponum=r.sponum and p.pilnum='+pilnum+';';
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};
