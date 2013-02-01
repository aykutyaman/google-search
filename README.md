#google-search

Query Google search API using REST
This node.js module is intended for who wants to interact with the [Google Custom Search API](https://developers.google.com/custom-search/v1/using_rest). This module requires that you have a [Google API Key](https://code.google.com/apis/console/) and [Google CX](http://www.google.com/cse/manage/create).

## Install

```
npm install google-search
```

## Usage
```js
var GoogleSearch = require('google-search');
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
```

## License

The MIT License (MIT)

Copyright (C) 2012 Vermonster LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

