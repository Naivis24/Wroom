let db = require('../configDb');

module.export.getListeCircuits = function(callback){

	db.getConnection(function(err, connexion){
		if(!err){
			let sql = "SELECT cirnum, payadrdrap, cirnom FROM circuit c INNER JOIN pays p ON p.paynum=c.paynum ORDER BY cirnom";

			connexion.query(sql, callback);
			connexion.release();
		}
	});
}