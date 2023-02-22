import BaseValidator from './BaseValidator';
export declare class ValidatorTUR extends BaseValidator {
    countryCode: string;
    /**
     * Validate National Identity Number
     * @param value
     */
    validateNationalIdNumber(value: string): boolean;
    /**
     * Turkish ID is 11 characters long & it cannot start with a 0
     * @param value
     */
    isValidNationalIdRegex(value: string): boolean;
    /**
     * (sum of first 10 digits) % 10 = the 11th digit
     * @param value
     */
    isSumOfFirstDigitsValid(value: string): boolean;
    /**
     * [(sum of 1,3,5,7,9th digits) * 7 – (sum of 2,4,6,8th digits)] % 10 = the 10th digit.
     * @param value
     */
    isSumOfOddAndEvenDigitsValid(value: string): boolean;
}
