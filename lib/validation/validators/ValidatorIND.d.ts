import BaseValidator from './BaseValidator';
export declare class ValidatorIND extends BaseValidator {
    countryCode: string;
    countryInfoCodes: string;
    /**
     * Validate National Identity Number
     * @param value
     */
    validateNationalIdNumber(value: string): boolean;
    /**
     * Validate Tax Identity Number
     * @param value
     */
    validateTaxIdNumber(value: string): boolean;
    /**
     * Indonesia ID is 16 characters long
     * @param value
     */
    isValidNationalIdRegex(value: string): boolean;
    /**
     * @param value
     */
    isValidNationalIdCountryInfoCode(value: string): boolean;
    /**
     * @param value
     */
    isValidNationalIdDate(value: string): boolean;
    /**
     * @param value
     */
    isValidNationalIdCheckLastDigits(value: string): boolean;
}
