import getValidatorClass from './ValidatorFactory';

export function validateNationalIdNumber(countryCode: string, nationalIdNumber: string): boolean {
  try {
    return getValidatorClass(countryCode).validateNationalIdNumber(nationalIdNumber);
  } catch (e) {
    return false;
  }
}

export function validatePassportNumber(countryCode: string, passportNumber: string): boolean {
  try {
    return getValidatorClass(countryCode).validatePassportNumber(passportNumber);
  } catch (e) {
    return false;
  }
}

export function validateTaxIdNumber(countryCode: string, taxIdNumber: string): boolean {
  try {
    return getValidatorClass(countryCode).validateTaxIdNumber(taxIdNumber);
  } catch (e) {
    return false;
  }
}
