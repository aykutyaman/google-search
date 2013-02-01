
var GoogleSearch = require('../lib/google-search');
var googleSearch = new GoogleSearch({
  key: 'YOUR_API_KEY',
  cx: 'YOUR_CX'
});


googleSearch.build({
  q: "",
  start: 5,
  fileType: "pdf",
  gl: "tr", //geolocation,
  lr: "lang_tr",
  num: 10, // Number of search results to return between 1 and 10, inclusive
  siteSearch: "http://kitaplar.ankara.edu.tr/" // Restricts results to URLs from a specified site
}, function(error, response) {
  console.log(response);
});