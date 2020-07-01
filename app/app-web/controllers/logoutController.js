'use strict';
const config = require('config');

module.exports.main = async (req, res, next) => {
  req.user = undefined;
  res.redirect('login');
}