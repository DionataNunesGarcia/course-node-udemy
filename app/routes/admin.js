module.exports = function(app){

	app.get('/noticias/incluir', function(req, res){
		app.app.controllers.AdminController.formulario_noticia(app, req, res);
	});

	app.post('/noticias/salvar', function(req, res){
		app.app.controllers.AdminController.noticia_salvar(app, req, res);		
	});

}