'use strict';


/**
 * 記事情報を取得
 *
 * body Body レビューの中身
 * returns inline_response_200
 **/
exports.apiV1ArticlesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "articleContents" : [ {
    "service" : "qiita",
    "articles" : [ {
      "title" : "clusterのリンクをまとめてみた",
      "userName" : "kamimi01",
      "numOfGood" : 5,
      "url" : "https://qiita.com/kamimi01"
    }, {
      "title" : "clusterのリンクをまとめてみた",
      "userName" : "kamimi01",
      "numOfGood" : 5,
      "url" : "https://qiita.com/kamimi01"
    } ]
  }, {
    "service" : "qiita",
    "articles" : [ {
      "title" : "clusterのリンクをまとめてみた",
      "userName" : "kamimi01",
      "numOfGood" : 5,
      "url" : "https://qiita.com/kamimi01"
    }, {
      "title" : "clusterのリンクをまとめてみた",
      "userName" : "kamimi01",
      "numOfGood" : 5,
      "url" : "https://qiita.com/kamimi01"
    } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

