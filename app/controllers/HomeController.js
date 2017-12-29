module.exports.index = function(app, req, res) {

	var connection = app.config.dbConnection();
	var noticiasDAO = new app.app.models.NoticiasDAO(connection);

	noticiasDAO.getNoticiasHome(function(error, result){		
		res.render('home/index', {entidades : result});
	});
}