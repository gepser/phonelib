
module.exports = function(phoneNumber) {
  return {
    phone: phoneNumber.phone.toString(),
    country: phoneNumber.country.toUpperCase()
  };
};
