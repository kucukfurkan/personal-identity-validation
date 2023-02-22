'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.ValidatorJOR = void 0;
const BaseValidator_1 = require('./BaseValidator');
class ValidatorJOR extends BaseValidator_1.default {
  constructor() {
    super(...arguments);
    this.countryCode = 'JOR';
  }
  /**
   * Validate National Identity Number
   * @param value
   */
  validateNationalIdNumber(value) {
    return this.isValidNationalIdRegex(value);
  }
  /**
   * Jordan ID is 8..10 characters long
   * @param value
   */
  isValidNationalIdRegex(value) {
    return /^[1-2]\d(0[1-9]|[1-9][0-2])\d{4}\d{2}$/.test(value);
  }
}
exports.ValidatorJOR = ValidatorJOR;
//# sourceMappingURL=ValidatorJOR.js.map
