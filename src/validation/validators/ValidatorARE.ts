import BaseValidator from './BaseValidator';
import {isValid} from 'luhn-js';

export class ValidatorARE extends BaseValidator {
  countryCode = 'ARE';

  /**
   * Validate National Identity Number
   * @param value
   */
  validateNationalIdNumber(value: string): boolean {
    console.log('ok');
    if (!this.isValidNationalIdRegex(value)) return false;
    if (!this.checkYear(value)) return false;
    console.log('ok');
    return isValid(value);
  }

  /**
   * United Arabic Emirates ID is 15 characters long & it must start with a 784
   * @param value
   */
  isValidNationalIdRegex(value: string): boolean {
    return /^784(19|20)\d{2}\d{7}\d$/.test(value);
  }

  /**
   * @param value
   */
  checkYear(value: string): boolean {
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
