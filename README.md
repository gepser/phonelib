
[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage](https://codeclimate.com/github/gepser/phonelib/badges/coverage.svg)](https://codeclimate.com/github/gepser/phonelib/coverage)
[![Code Climate](https://codeclimate.com/github/gepser/phonelib/badges/gpa.svg)](https://codeclimate.com/github/gepser/phonelib)


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
  console.log(result);
  //result ==> { phone: '2024561414', country: 'US', 'international: '+1 202-456-1414', isValid: true, numberType: 2}

  /*You can see the full numberType list on lib/phonelibtype.js
    it uses the same Google list. */

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

## Change log

### 1.0.10
* parse `phone` to string before 
