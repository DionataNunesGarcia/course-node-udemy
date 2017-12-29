function NoticiasDAO(connection) {
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao DESC', callback);
};

NoticiasDAO.prototype.getNoticia = function(id, callback){
	this._connection.query('select * from noticias where id = '+ id.id_noticia, callback);
};

NoticiasDAO.prototype.getNoticiasHome = function(callback){
	this._connection.query('select * from noticias ORDER BY data_criacao DESC LIMIT 5', callback);
};

NoticiasDAO.prototype. salvar = function(callback){
	this._connection.query('insert into noticias set ?', dados, callback);
};

module.exports = function() {

	return NoticiasDAO;
}