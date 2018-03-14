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


module.exports.getResultatGP = function(gpnum, callback){
	db.getConnection(function(err, connexion){
		if(!err){
			let sql = "SELECT gpcommentaire, pilnom, pilprenom, gp.gpnum, tempscourse\n";
			sql = sql + "FROM pilote p, course c, grandprix gp\n";
			sql = sql + "WHERE gp.GPNUM=c.GPNUM and p.PILNUM = c.PILNUM and c.GPNUM="+gpnum+"\n";
			sql = sql + "ORDER BY tempscourse;\n";
			console.log(sql);

			connexion.query(sql, callback);
			connexion.release();
		}
	});
};
/*
SET @rank=0;
SELECT t.gpcommentaire, t.pilnom, t.pilprenom, t.gpnum, t.tempscourse, p.ptnbpointsplace
FROM points p, (SELECT gpcommentaire, pilnom, pilprenom, gp.gpnum, tempscourse, @rank:=@rank+1 AS rank
				FROM pilote p, course c, grandprix gp
				WHERE gp.GPNUM=c.GPNUM and p.PILNUM = c.PILNUM and c.GPNUM=1
				ORDER BY tempscourse) t
WHERE CAST(t.rank AS CHAR)=CAST(p.ptplace AS CHAR)
*/

/*
SELECT gpcommentaire, pilnom, pilprenom, gp.gpnum, tempscourse
FROM pilote p, course c, grandprix gp
WHERE gp.GPNUM=c.GPNUM and p.PILNUM = c.PILNUM and c.GPNUM=1
ORDER BY tempscourse
*/

module.exports.getPointsParPlace = function(gpnum, callback){
	db.getConnection(function(err, connexion){
		if(!err){
			let sql = "SELECT ptplace, ptnbpointsplace FROM points";
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};
