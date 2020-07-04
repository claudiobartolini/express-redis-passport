'use strict';
const config = require('config');
const url = require('url');
const querystring = require('querystring');
const { Auth0Config } = require('../../config/default');

module.exports.main = async (req, res, next) => {
  req.logout();

  var returnTo = req.protocol + '://' + req.hostname;
  var port = req.connection.localPort;
  if (port !== undefined && port !== 80 && port !== 443) {
    returnTo += ':' + port;
  }
  var logoutURL = new url.URL(
      'https://' + Auth0Config.domain + '/v2/logout'
    );
  var searchString = querystring.stringify({
    client_id: Auth0Config.clientId,
    returnTo: returnTo
  });
  logoutURL.search = searchString;

  res.redirect(logoutURL);  
}