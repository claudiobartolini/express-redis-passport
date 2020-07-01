'use strict';
const config = require('config');
const GoogleConfig = config.get('GoogleConfig');

module.exports.callback = async (req, res, next) => {
	console.log(req.user);
	if (req.user.user_id !== GoogleConfig.googleUser) {
		return res.redirect('/');
	}
	res.redirect('/user');
}