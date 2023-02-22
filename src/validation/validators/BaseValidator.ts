export default class BaseValidator {
  /** @param value */
  validateNationalIdNumber(value: string): boolean {
    throw new Error(
      'validateNationalIdNumber(' + value + ') function not implemented for this validator',
    );
  }

  /** @param value */
  validatePassportNumber(value: string): boolean {
    return /^(?!^0+$)[a-zA-Z\d]{6,20}$/.test(value);
  }

  /** @param value */
  /* eslint-disable */
  validateTaxIdNumber(value: string): boolean {
    return false;
  }
}
