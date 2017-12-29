module.exports = function(app){
	app.get('/', function(req, res){
		app.app.controllers.HomeController.index(app, req, res);
	});
}