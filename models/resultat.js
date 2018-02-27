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