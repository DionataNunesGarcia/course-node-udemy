var mysql = require('mysql');

var connMysql  = function(){
	console.log('conexao restabelecida');
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'root',
		database : 'node_udemy'
	});
}

module.exports = function(){
	console.log('carregou modulo');
	return connMysql
}