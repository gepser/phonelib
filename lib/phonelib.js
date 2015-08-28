var PNF = require('google-libphonenumber').PhoneNumberFormat;
var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

module.exports.isValid = function (phoneNumber, callback) {

  var formattedNumber = {};
  var phone = phoneUtil.parse(phoneNumber.phone, phoneNumber.country);

  formattedNumber.international = phoneUtil.format(phone, PNF.INTERNATIONAL);
  formattedNumber.isValid = phoneUtil.isValidNumber(phone);
  formattedNumber.numberType = phoneUtil.getNumberType(phone);

  callback(null, formattedNumber);
};
