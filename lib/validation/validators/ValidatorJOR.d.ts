import BaseValidator from './BaseValidator';
export declare class ValidatorJOR extends BaseValidator {
    countryCode: string;
    /**
     * Validate National Identity Number
     * @param value
     */
    validateNationalIdNumber(value: string): boolean;
    /**
     * Jordan ID is 10 characters long
     * @param value
     */
    isValidNationalIdRegex(value: string): boolean;
}
