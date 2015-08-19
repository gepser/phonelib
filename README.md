
[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

# phonelib
Simple phonelib validator

## Quick Start

Install it with NPM or add it to your package.json:

``` bash
$ npm install phonelib
```

Then:

``` js
var phonelib = require('phonelib');

var phoneNumber = {
  phone: '2024561414',
  country: 'US'
}

phonelib.isValid(phoneNumber, function(err, result){
  console.log(result); //{ international: '+1 202-456-1414', isValid: true }
});
```
[npm-image]: https://img.shields.io/npm/v/phonelib.svg?style=flat-square
[npm-url]: https://npmjs.org/package/phonelib
[travis-image]: https://travis-ci.org/gepser/phonelib.svg?branch=master
[travis-url]: https://travis-ci.org/gepser/phonelib
