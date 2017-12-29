module.exports.formulario_noticia = function(app, req, res) {
	res.render('admin/form_add_noticia', {validacao: {}, dados: {}});
}

module.exports.noticia_salvar = function(app, req, res) {
	var dados = req.body;

	req.assert('titulo', 'Titulo é obrigatório.').notEmpty();
	req.assert('resumo', 'Resumo é obrigatório.').notEmpty();
	req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres.').len(10,100);
	req.assert('autor', 'Autor é obrigatório.').notEmpty();
	req.assert('data_noticia', 'Data é obrigatória.').notEmpty();
	req.assert('noticia', 'Notícia é obrigatório.').notEmpty();

	var validacao = req.validationErrors();
	console.log(validacao);

	if(validacao){
		res.render('admin/form_add_noticia', {validacao : validacao, dados: dados});
		return;
	}

	var connection = app.config.dbConnection();
	var noticiasDAO = new app.app.models.NoticiasDAO(connection);

	noticiasDAO.salvar(dados, function(error, result){
		res.redirect('/noticias');
	});
}