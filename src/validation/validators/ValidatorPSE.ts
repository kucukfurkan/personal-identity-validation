import {isValid} from 'luhn-js';
import BaseValidator from './BaseValidator';

export class ValidatorPSE extends BaseValidator {
  countryCode = 'PSE';

  /**
   * Validate National Identity Number
   * @param value
   */
  validateNationalIdNumber(value: string): boolean {
    if (!this.isValidNationalIdRegex(value)) return false;
    return isValid(value);
  }

  /**
   * Palestine ID is 9 characters long & it cannot start with a 0
   * @param value
   */
  isValidNationalIdRegex(value: string): boolean {
    return /^[1-9]\d{8}$/.test(value);
  }
}
