import BaseValidator from './BaseValidator';
export declare class ValidatorISR extends BaseValidator {
    countryCode: string;
    /**
     * Validate National Identity Number
     * @param value
     */
    validateNationalIdNumber(value: string): boolean;
    /**
     * Israel ID is 9 characters long & it cannot start with a 0
     * @param value
     */
    isValidNationalIdRegex(value: string): boolean;
}
