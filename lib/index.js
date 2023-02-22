"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSupportedCountry = exports.validateTaxIdNumber = exports.validatePassportNumber = exports.validateNationalIdNumber = void 0;
const validation_1 = require("./validation");
const country_1 = require("./util/country");
exports.validateNationalIdNumber = validation_1.validateNationalIdNumber;
exports.validatePassportNumber = validation_1.validatePassportNumber;
exports.validateTaxIdNumber = validation_1.validateTaxIdNumber;
exports.isSupportedCountry = country_1.isSupportedCountry;
