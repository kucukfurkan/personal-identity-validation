"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSupportedCountry = exports.getSupportedCountries = void 0;
const SUPPORTED_COUNTRIES = ['IND', 'ISR', 'JOR', 'PSE', 'QAT', 'TUR', 'UAE'];
function getSupportedCountries() {
    return SUPPORTED_COUNTRIES;
}
exports.getSupportedCountries = getSupportedCountries;
/**
 * @param countryCode
 */
function isSupportedCountry(countryCode) {
    return SUPPORTED_COUNTRIES.indexOf(countryCode) !== -1;
}
exports.isSupportedCountry = isSupportedCountry;
