'use strict';

var utils = require('../utils/writer.js');
var Articles = require('../service/ArticlesService');

module.exports.apiV1ArticlesPOST = function apiV1ArticlesPOST (req, res, next, body) {
  Articles.apiV1ArticlesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
