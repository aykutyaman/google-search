
var https = require('https'),
    _ = require('underscore'),
    url = require('url');

var GoogleSearch = function(options) {
  if (!options) options = {};
  options = _.defaults(options, {
    format: "json",
    headers: {"User-Agent": "GoogleSearch"},
    host: "www.googleapis.com",
    port: 443,
    path: "/customsearch/v1",
    alt: "json"
  });

  this.config = {
    key: options.key,
    format: options.format,
    headers: options.headers,
    host: options.host,
    port: options.port,
    path: options.path,
    cx: options.cx
  };
  return this;
};

GoogleSearch.prototype.build = function(options, callback) {
  options = _.defaults(options, {
    fileType: "pdf"
  });
  //this._doRequest(this._generateUrl(options), callback); 
  this._generateUrl(options);
};

GoogleSearch.prototype._generateUrl = function(query) {
  query.key = this.config.key;
  query.cx = this.config.cx;
  var pathname = this.config.path;
  //console.log(pathname);
  var urlFormatted = url.format({
    protocol: "https",
    hostname: this.config.host,
    pathname: pathname,
    query: query
  });
  console.log(this.config);
  console.log(urlFormatted);
  return url.parse(urlFormatted);
};

GoogleSearch.prototype._doRequest = function(requestQuery, callback) {
  https.get(requestQuery, function(res) {
    var data = [];
    for (var item in res.headers) {
      console.log(item + ":" + res.headers[item]);
    }

    res.
      on('data', function(chunk) {data.push(chunk);}).
      on('end', function() {
        var dataBuffer = data.join('').trim();
        var result;
        try {
          result = JSON.parse(dataBuffer);
        } catch(e) {
          result = {'status_code': 500, 'status_text': 'JSON parse failed'};
        }
        callback(null, result);
      }).
      on('error', function(e) {
        callback(e);
      });
  });
};

module.exports = GoogleSearch;