import BaseValidator from './BaseValidator';

export class ValidatorJOR extends BaseValidator {
  countryCode = 'JOR';

  /**
   * Validate National Identity Number
   * @param value
   */
  validateNationalIdNumber(value: string): boolean {
    return this.isValidNationalIdRegex(value);
  }

  /**
   * Jordan ID is 10 characters long
   * @param value
   */
  isValidNationalIdRegex(value: string): boolean {
    return /^[1-2]\d(0[1-9]|[1-9][0-2])\d{4}\d{2}$/.test(value);
  }
}
