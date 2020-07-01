'use strict';
const config = require('config');
const AppConfig = config.get('AppConfig');

module.exports.main = async (req, res, next) => {
	if (!req.user) {
		res.redirect('/');
	}
	let rootFolder = req.params.id || '0';
	res.render('pages/user', {
		user: req.user,
		rootFolder: rootFolder,
		title: "Skeleton App",
		domain: AppConfig.domain
	});
}