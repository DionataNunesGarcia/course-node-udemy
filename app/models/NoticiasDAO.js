function NoticiasDAO(connection) {
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias order by id', callback);
};

NoticiasDAO.prototype.getNoticia = function(callback){
	this._connection.query('select * from noticias where id = 5', callback);
};

NoticiasDAO.prototype. salvar = function(dados, callback){
	this._connection.query('insert into noticias set ?', dados, callback);
};

module.exports = function() {

	return NoticiasDAO;
}