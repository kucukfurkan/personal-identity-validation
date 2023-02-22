export default class BaseValidator {
    /** @param value */
    validateNationalIdNumber(value: string): boolean;
    /** @param value */
    validatePassportNumber(value: string): boolean;
    /** @param value */
    validateTaxIdNumber(value: string): boolean;
}
