let db = require('../configDb');

module.exports.getDernierResultat = function(callback){
	db.getConnection(function(err, connexion){
		if(!err){
			let sql = "SELECT gpnom, gpdate FROM grandprix ORDER BY gpdate DESC LIMIT 1";

			connexion.query(sql, callback);
			connexion.release();
		}
	});
};