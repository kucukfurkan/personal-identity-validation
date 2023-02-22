# personal-identity-validation

Validate [personal-identity-validation](https://en.wikipedia.org/wiki/National_identification_number).

> **Note:** This is a minimal version which has support for a short list of countries, more will be added soon.

## Usable Function
```js
isSupportedCountry(countryCode);
validateNationalIdNumber(countryCode, value);
validatePassportNumber(countryCode, value);
validateTaxIdNumber(countryCode, value);
```

## Usage

```js
import personalIdentityValidation from 'personal-identity-validation';

const nationalId = '1734312345478';

const isValidIdForJordan = personalIdentityValidation.validateNationalIdNumber('JOR', nationalId);
const isValidIdForIndonesia = personalIdentityValidation.validateNationalIdNumber('IND', nationalId);
const isValidForIsrael = personalIdentityValidation.validateNationalIdNumber('ISR', nationalId);
const isValidIdForPalestine = personalIdentityValidation.validateNationalIdNumber('PSE', nationalId);
const isValidIdForQatar = personalIdentityValidation.validateNationalIdNumber('QAT', nationalId);
const isValidIdForTurkiye = personalIdentityValidation.validateNationalIdNumber('TUR', nationalId);
```

## Type of national IDs supported

```
JOR: 'Jordan'
ISR: 'Israel'
IND: 'Indonesia'
PSE: 'Palestine'
QAT: 'Qatar'
TUR: 'Türkiye'
```
