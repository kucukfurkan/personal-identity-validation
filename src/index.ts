import {
  validateNationalIdNumber as exportValidateNationalIdNumber,
  validatePassportNumber as exportValidatePassportNumber,
  validateTaxIdNumber as exportValidateTaxIdNumber,
} from './validation';

import {isSupportedCountry as exportIsSupportedCountry} from './util/country';

export const validateNationalIdNumber = exportValidateNationalIdNumber;
export const validatePassportNumber = exportValidatePassportNumber;
export const validateTaxIdNumber = exportValidateTaxIdNumber;
export const isSupportedCountry = exportIsSupportedCountry;
