"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorPSE = void 0;
const luhn_js_1 = require("luhn-js");
const BaseValidator_1 = __importDefault(require("./BaseValidator"));
class ValidatorPSE extends BaseValidator_1.default {
    constructor() {
        super(...arguments);
        this.countryCode = 'PSE';
    }
    /**
     * Validate National Identity Number
     * @param value
     */
    validateNationalIdNumber(value) {
        if (!this.isValidNationalIdRegex(value))
            return false;
        return (0, luhn_js_1.isValid)(value);
    }
    /**
     * Palestine ID is 9 characters long & it cannot start with a 0
     * @param value
     */
    isValidNationalIdRegex(value) {
        return /^[1-9]\d{8}$/.test(value);
    }
}
exports.ValidatorPSE = ValidatorPSE;
