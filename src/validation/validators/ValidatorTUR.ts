import BaseValidator from './BaseValidator';

export class ValidatorTUR extends BaseValidator {
  countryCode = 'TUR';

  /**
   * Validate National Identity Number
   * @param value
   */
  validateNationalIdNumber(value: string): boolean {
    if (!this.isValidNationalIdRegex(value)) return false;
    if (!this.isSumOfFirstDigitsValid(value)) return false;
    return this.isSumOfOddAndEvenDigitsValid(value);
  }

  /**
   * Turkish ID is 11 characters long & it cannot start with a 0
   * @param value
   */
  isValidNationalIdRegex(value: string): boolean {
    return /^[1-9]\d{10}$/.test(value);
  }

  /**
   * (sum of first 10 digits) % 10 = the 11th digit
   * @param value
   */
  isSumOfFirstDigitsValid(value: string): boolean {
    const eleventhDigit: number = parseInt(value.substr(10, 1), 10);
    const sumOfFirstTenDigits: number = value
      .substr(0, 10)
      .split('')
      .reduce((a, b) => parseInt(a.toString()) + parseInt(b.toString()), 0);
    return sumOfFirstTenDigits % 10 === eleventhDigit;
  }

  /**
   * [(sum of 1,3,5,7,9th digits) * 7 – (sum of 2,4,6,8th digits)] % 10 = the 10th digit.
   * @param value
   */
  isSumOfOddAndEvenDigitsValid(value: string): boolean {
    const digitNumberTen = parseInt(value.substr(9, 1), 10);
    const firstNineDigitsAsArray = value.substr(0, 9).split('');

    const sumOfOddIndexedNumbers = firstNineDigitsAsArray
      .filter((item, index) => (index + 1) % 2 !== 0)
      .reduce((a, b) => Number(a) + Number(b), 0);

    const sumOfEvenIndexedNumbers = firstNineDigitsAsArray
      .filter((item, index) => (index + 1) % 2 === 0)
      .reduce((a, b) => Number(a) + Number(b), 0);

    return (sumOfOddIndexedNumbers * 7 - sumOfEvenIndexedNumbers) % 10 === digitNumberTen;
  }
}
