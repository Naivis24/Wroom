let db = require('../configDb');

module.exports.getListeCircuits = function(callback){
	db.getConnection(function(err, connexion){
		if(!err){
			let sql = "SELECT cirnum, FROM circuit c INNER JOIN pays p ON p.paynum=c.paynum ORDER BY cirnom";

			connexion.query(sql, callback);
			connexion.release();
		}
	});
};


module.exports.getInfosCircuit = function(cirnum, callback){
	db.getConnection(function(err, connexion){
		if(!err){
			let sql = "select cirnom, cirlongueur, cirnbspectateurs, paynom, cirtext, ciradresseimage from circuit c, pays p where c.paynum = p.PAYNUM and c.cirnum = "+cirnum;

			connexion.query(sql, callback);
			connexion.release();
		}
	});

};

module.exports.ajouterCircuit = function(nom, long, pays, nbPers, description, img, callback){
	db.getConnection(function(err, connexion){
		if(!err){
			let sql = "INSERT INTO circuit(paynum, cirnom, cirlongueur, cirnbspectateurs, cirtext, ciradresseimage)";
			sql += "VALUES("+pays+', "'+nom+'", '+long+', '+nbPers+', "'+description+'", "'+img+'")';
			console.log(sql);

			connexion.query(sql, callback);
			connexion.release();
		}
	});
};
