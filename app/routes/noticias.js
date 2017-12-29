module.exports = function(app){

	app.get('/noticias', function(req, res){
		app.app.controllers.NoticiasController.noticias(app, req, res);
	});

	app.get('/noticia', function(req, res){
		app.app.controllers.NoticiasController.noticia(app, req, res);
	});
}