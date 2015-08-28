var Code = require('code');
var Lab = require('lab');
var expect = Code.expect;
var lab = exports.lab = Lab.script();
var phoneType = require('../lib/phonelibtype');

var phonelib = require('../');

lab.experiment('Check numbers', function () {

  lab.test('Check a valid phone number using phonelib', function (done) {

    var phone = '2024561414';
    var country = 'US';

    var expected = {
      international: '+1 202-456-1414',
      isValid: true
    };

    phonelib.isValid({phone: phone, country: country}, function (err, phoneNumber) {

      if (err) {
        done(err);
      }
      expect(phoneNumber.international).to.be.equal(expected.international);
      expect(phoneNumber.isValid).to.be.equal(expected.isValid);
      done();
    });

  });

  lab.test('Check an invalid phone number using phonelib', function (done) {

    var phone = '88888888';
    var country = 'GT';

    var expected = {
      isValid: false
    };

    phonelib.isValid({phone: phone, country: country}, function (err, phoneNumber) {

      if (err) {
        done(err);
      }
      expect(phoneNumber.isValid).to.be.equal(expected.isValid);
      done();
    });

  });

  lab.test('Check number type', function (done) {

    var phone = '2024561414';
    var country = 'US';

    var expected = {
      numberType: phoneType.phoneNumberType.MOBILE
    };

    phonelib.isValid({phone: phone, country: country}, function (err, phoneNumber) {
console.log(phoneNumber);
      if (err) {
        done(err);
      }
      expect(phoneNumber.numberType).to.be.equal(expected.numberType);
      done();
    });

  });

});
