'use strict';

module.exports.callback = async (req, res, next) => {
	console.log(req.user);
	res.redirect('/user');
}