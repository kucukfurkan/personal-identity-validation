'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.ValidatorARE = void 0;
const BaseValidator_1 = require('./BaseValidator');
const luhn_js_1 = require('luhn-js');
class ValidatorARE extends BaseValidator_1.default {
  constructor() {
    super(...arguments);
    this.countryCode = 'ARE';
  }
  /**
   * Validate National Identity Number
   * @param value
   */
  validateNationalIdNumber(value) {
    if (!this.isValidNationalIdRegex(value)) return false;
    if (!this.checkYear(value)) return false;
    return luhn_js_1.isValid(value);
  }
  /**
   * United Arabic Emirates ID is 15 characters long & it must start with a 784
   * @param value
   */
  isValidNationalIdRegex(value) {
    return /^784(19|20)\d{2}\d{7}\d$/.test(value);
  }
  /**
   * @param value
   */
  checkYear(value) {
    return (
      parseInt(
        new Date()
          .toJSON()
          .substr(0, 4)
          .toString(),
      ) > parseInt(value.substr(3, 4).toString())
    );
  }
}
exports.ValidatorARE = ValidatorARE;
//# sourceMappingURL=ValidatorARE.js.map
