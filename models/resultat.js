let db = require('../configDb');

module.exports.getListePrix = function(callback){
	db.getConnection(function(err, connexion){
		if(!err){
			let sql = "select gpnum, gpnom, payadrdrap FROM grandprix g, circuit c, pays p WHERE g.cirnum = c.CIRNUM and c.PAYNUM = p.PAYNUM";

			connexion.query(sql, callback);
			connexion.release();
		}
	});
}; 


module.exports.getResultatPrix = function(gpnum, callback){
	db.getConnection(function(err, connexion){
		if(!err){
			let sql = "SELECT pilnom, pilprenom, gpnum, tempscourse FROM pilote p, course c where p.PILNUM = c.PILNUM and c.GPNUM ="+gpnum;
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});

}; 