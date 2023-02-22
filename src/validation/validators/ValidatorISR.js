'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.ValidatorISR = void 0;
const luhn_js_1 = require('luhn-js');
const BaseValidator_1 = require('./BaseValidator');
class ValidatorISR extends BaseValidator_1.default {
  constructor() {
    super(...arguments);
    this.countryCode = 'ISR';
  }
  /**
   * Validate National Identity Number
   * @param value
   */
  validateNationalIdNumber(value) {
    if (!this.isValidNationalIdRegex(value)) return false;
    return luhn_js_1.isValid(value);
  }
  /**
   * Israel ID is 9 characters long & it cannot start with a 0
   * @param value
   */
  isValidNationalIdRegex(value) {
    return /^[1-9]\d{8}$/.test(value);
  }
}
exports.ValidatorISR = ValidatorISR;
//# sourceMappingURL=ValidatorISR.js.map
