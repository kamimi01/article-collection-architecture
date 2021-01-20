'use strict';

var utils = require('../utils/writer.js');
var Articles = require('../service/ArticlesService');

module.exports.apiV1ArticlesGET = function apiV1ArticlesGET (req, res, next, qiitaUserName, noteUserName) {
  Articles.apiV1ArticlesGET(qiitaUserName, noteUserName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
