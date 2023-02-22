const SUPPORTED_COUNTRIES = ['IND', 'ISR', 'JOR', 'PSE', 'QAT', 'TUR', 'UAE'];

export function getSupportedCountries(): string[] {
  return SUPPORTED_COUNTRIES;
}

/**
 * @param countryCode
 */
export function isSupportedCountry(countryCode: string): boolean {
  return SUPPORTED_COUNTRIES.indexOf(countryCode) !== -1;
}
