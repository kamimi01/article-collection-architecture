'use strict';


/**
 * 記事情報取得
 *
 * qiitaUserName String QiitaユーザID (optional)
 * noteUserName String Noteユーザ名 (optional)
 * returns inline_response_200
 **/
exports.apiV1ArticlesGET = function(qiitaUserName,noteUserName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "articleContents" : [ {
    "createdDate" : "2020-12-24T12:06:44+09:00",
    "service" : "qiita",
    "title" : "色んな人向けにバーチャルSNS - cluster - に関するリンクを広く浅くまとめてみた",
    "userName" : "kamimi01",
    "numOfGood" : 1,
    "url" : "https://qiita.com/kamimi01/items/353ed9502ed62cbe9864"
  }, {
    "createdDate" : "2020-12-24T12:06:44+09:00",
    "service" : "qiita",
    "title" : "色んな人向けにバーチャルSNS - cluster - に関するリンクを広く浅くまとめてみた",
    "userName" : "kamimi01",
    "numOfGood" : 1,
    "url" : "https://qiita.com/kamimi01/items/353ed9502ed62cbe9864"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

