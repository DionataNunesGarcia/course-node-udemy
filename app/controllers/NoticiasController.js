module.exports.noticias = function(app, req, res) {
	
	var connection = app.config.dbConnection();
	var noticiasDAO = new app.app.models.NoticiasDAO(connection);

	noticiasDAO.getNoticias(function(error, result){
		
		res.render('noticias/noticias', {entidades : result});
	});
}

module.exports.noticia = function(app, req, res) {
	
	var connection = app.config.dbConnection();
	var noticiasDAO = new app.app.models.NoticiasDAO(connection);
	var id = req.query;

	noticiasDAO.getNoticia(id, function(error, result){
		console.log(result);
		res.render('noticias/noticia', {entidade : result});
	});
}