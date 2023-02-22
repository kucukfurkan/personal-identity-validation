import BaseValidator from './BaseValidator';
export declare class ValidatorQAT extends BaseValidator {
    countryCode: string;
    countryIsoCodes: string;
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
     * Qatar ID is 11 characters long & it cannot start with a 0
     * @param value
     */
    isValidNationalIdRegex(value: string): boolean;
    /**
     * @param value
     */
    isValidNationalIdDate(value: string): boolean;
    /**
     * @param value
     */
    isValidNationalIdCountryCode(value: string): boolean;
    /**
     * @param value
     */
    isValidNationalIdCheckLastDigits(value: string): boolean;
    /**
     * @param value
     */
    isValidTaxIdRegex(value: string): boolean;
}
