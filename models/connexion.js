let db = require('../configDb');

module.exports.getLogin = function (login, passwd, callback) {
   // connection à la base
	db.getConnection(function(err, connexion){
        if(!err){
        	  // s'il n'y a pas d'erreur de connexion
        	  // execution de la requête SQL

						let sql ="SELECT login FROM login WHERE login='"+login+"' AND passwd='"+passwd+"'";
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
         }
      });
};
