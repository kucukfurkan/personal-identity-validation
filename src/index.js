'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const validation_1 = require('./validation');
const country_1 = require('./util/country');
exports.default = {
  isSupportedCountry: country_1.isSupportedCountry,
  validateNationalIdNumber: validation_1.validateNationalIdNumber,
  validatePassportNumber: validation_1.validatePassportNumber,
  validateTaxIdNumber: validation_1.validateTaxIdNumber,
};
//# sourceMappingURL=index.js.map
