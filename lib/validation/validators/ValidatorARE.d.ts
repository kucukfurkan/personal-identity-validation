import BaseValidator from './BaseValidator';
export declare class ValidatorARE extends BaseValidator {
    countryCode: string;
    /**
     * Validate National Identity Number
     * @param value
     */
    validateNationalIdNumber(value: string): boolean;
    /**
     * United Arabic Emirates ID is 15 characters long & it must start with a 784
     * @param value
     */
    isValidNationalIdRegex(value: string): boolean;
    /**
     * @param value
     */
    checkYear(value: string): boolean;
}
