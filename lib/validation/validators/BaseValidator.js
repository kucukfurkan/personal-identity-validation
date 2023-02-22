"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseValidator {
    /** @param value */
    validateNationalIdNumber(value) {
        throw new Error('validateNationalIdNumber(' + value + ') function not implemented for this validator');
    }
    /** @param value */
    validatePassportNumber(value) {
        return /^(?!^0+$)[a-zA-Z\d]{6,20}$/.test(value);
    }
    /** @param value */
    /* eslint-disable */
    validateTaxIdNumber(value) {
        return false;
    }
}
exports.default = BaseValidator;
