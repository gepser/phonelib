
module.exports.phoneNumberType = {
  FIXED_LINE: 0,
  MOBILE: 1,
  // In some regions (e.g. the USA), it is impossible to distinguish between
  // fixed-line and mobile numbers by looking at the phone number itself.
  FIXED_LINE_OR_MOBILE: 2,
  // Freephone lines
  TOLL_FREE: 3,
  PREMIUM_RATE: 4,
  // The cost of this call is shared between the caller and the recipient, and
  // is hence typically less than PREMIUM_RATE calls. See
  // http://en.wikipedia.org/wiki/Shared_Cost_Service for more information.
  SHARED_COST: 5,
  // Voice over IP numbers. This includes TSoIP (Telephony Service over IP).
  VOIP: 6,
  // A personal number is associated with a particular person, and may be routed
  // to either a MOBILE or FIXED_LINE number. Some more information can be found
  // here: http://en.wikipedia.org/wiki/Personal_Numbers
  PERSONAL_NUMBER: 7,
  PAGER: 8,
  // Used for 'Universal Access Numbers' or 'Company Numbers'. They may be
  // further routed to specific offices, but allow one number to be used for a
  // company.
  UAN: 9,
  // Used for 'Voice Mail Access Numbers'.
  VOICEMAIL: 10,
  // A phone number is of type UNKNOWN when it does not fit any of the known
  // patterns for a specific region.
  UNKNOWN: -1
};
