let db = require('../configDb');

module.exports.getDernierResultat = function(callback){
	db.getConnection(function(err, connexion){
		if(!err){
			let sql = "SELECT gpnom, DATE_FORMAT(gpdate, "+'"%d %M %Y"'+") as gpdate, gpnum FROM grandprix ORDER BY gpdate LIMIT 1";	
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getDerniereMaj = function(callback){
	db.getConnection(function(err, connexion){
		if(!err){
			let sql = "SELECT DATE_FORMAT(gpdatemaj, "+'"%d %M %Y"'+") as gpdatemaj FROM grandprix ORDER BY gpdatemaj DESC LIMIT 1";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};