'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.validateTaxIdNumber = exports.validatePassportNumber = exports.validateNationalIdNumber = void 0;
const ValidatorFactory_1 = require('./ValidatorFactory');
function validateNationalIdNumber(countryCode, nationalIdNumber) {
  try {
    return ValidatorFactory_1.default(countryCode).validateNationalIdNumber(nationalIdNumber);
  } catch (e) {
    return false;
  }
}
exports.validateNationalIdNumber = validateNationalIdNumber;
function validatePassportNumber(countryCode, passportNumber) {
  try {
    return ValidatorFactory_1.default(countryCode).validatePassportNumber(passportNumber);
  } catch (e) {
    return false;
  }
}
exports.validatePassportNumber = validatePassportNumber;
function validateTaxIdNumber(countryCode, taxIdNumber) {
  try {
    return ValidatorFactory_1.default(countryCode).validateTaxIdNumber(taxIdNumber);
  } catch (e) {
    return false;
  }
}
exports.validateTaxIdNumber = validateTaxIdNumber;
//# sourceMappingURL=index.js.map
