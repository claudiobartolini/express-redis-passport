'use strict';
const config = require('config');
const AppConfig = config.get('AppConfig');
module.exports.main = async (req, res, next) => {
	if (!req.user) {
		res.redirect('/');
	}
	if (AppConfig.permittedUsers.includes(req.user.user_id)) {
		return res.redirect(AppConfig.privateAddress);
	}
	res.render('pages/user', {
		user: req.user,
		title: "Auth",
		domain: AppConfig.domain
	});
}