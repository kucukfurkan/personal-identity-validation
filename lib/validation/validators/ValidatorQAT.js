"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorQAT = void 0;
const BaseValidator_1 = __importDefault(require("./BaseValidator"));
class ValidatorQAT extends BaseValidator_1.default {
    constructor() {
        super(...arguments);
        this.countryCode = 'QAT';
        this.countryIsoCodes = '004|248|008|012|016|020|024|660|010|028|032|051|533|036|040|031|044|048|050|052|112|056|084|204|060|064|068|535|070|072|074|076|086|096|100|854|108|132|116|120|124|136|140|148|152|156|162|166|170|174|178|180|184|188|384|191|192|531|196|203|208|262|212|214|218|818|222|226|232|233|748|231|238|234|242|246|250|254|258|260|266|270|268|276|288|292|300|304|308|312|316|320|831|324|624|328|332|334|336|340|344|348|352|356|360|364|368|372|833|376|380|388|392|832|400|398|404|296|408|410|414|417|418|428|422|426|430|434|438|440|442|446|450|454|458|462|466|470|584|474|478|480|175|484|583|498|492|496|499|500|504|508|104|516|520|524|528|540|554|558|562|566|570|574|807|580|578|512|586|585|275|591|598|600|604|608|612|616|620|630|634|638|642|643|646|652|654|659|662|663|666|670|882|674|678|682|686|688|690|694|702|534|703|705|090|706|710|239|728|724|144|729|740|744|752|756|760|158|762|834|764|626|768|772|776|780|788|792|795|796|798|800|804|784|826|840|581|858|860|548|862|704|092|850|876|732|887|894|716';
    }
    /**
     * Validate National Identity Number
     * @param value
     */
    validateNationalIdNumber(value) {
        if (!this.isValidNationalIdRegex(value))
            return false;
        if (!this.isValidNationalIdDate(value))
            return false;
        if (!this.isValidNationalIdCountryCode(value))
            return false;
        return this.isValidNationalIdCheckLastDigits(value);
    }
    /**
     * Validate Tax Identity Number
     * @param value
     */
    validateTaxIdNumber(value) {
        return this.isValidTaxIdRegex(value);
    }
    /**
     * Qatar ID is 11 characters long & it cannot start with a 0
     * @param value
     */
    isValidNationalIdRegex(value) {
        return /^[2-3]\d{10}$/.test(value);
    }
    /**
     * @param value
     */
    isValidNationalIdDate(value) {
        if (value.substr(0, 1) === '3')
            return (value.substr(1, 2) <
                new Date()
                    .toJSON()
                    .toString()
                    .substr(2, 2));
        return true;
    }
    /**
     * @param value
     */
    isValidNationalIdCountryCode(value) {
        return this.countryIsoCodes.indexOf(value.substr(3, 3)) !== -1;
    }
    /**
     * @param value
     */
    isValidNationalIdCheckLastDigits(value) {
        return value.substr(-5) !== '00000';
    }
    /**
     * @param value
     */
    isValidTaxIdRegex(value) {
        return /^\d{11}$/.test(value);
    }
}
exports.ValidatorQAT = ValidatorQAT;
