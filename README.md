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