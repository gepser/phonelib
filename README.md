
[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Coverage Status](https://coveralls.io/repos/gepser/phonelib/badge.svg?branch=master&service=github)](https://coveralls.io/github/gepser/phonelib?branch=master)

[![js-standard-style][standard-image]][standard-url]


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

## Tests

```sh
npm test
```

## Licenses

This package is licensed under MIT.

[npm-image]: https://img.shields.io/npm/v/phonelib.svg
[npm-url]: https://npmjs.org/package/phonelib
[travis-image]: https://travis-ci.org/gepser/phonelib.svg
[travis-url]: https://travis-ci.org/gepser/phonelib
[standard-image]: https://cdn.rawgit.com/feross/standard/master/badge.svg
[standard-url]: https://github.com/feross/standard
