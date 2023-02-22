'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const validation_1 = require('../../src/validation');
describe('Qatar Test National Id Number', () => {
  test('National Id Number is Valid => 29979261028', () => {
    expect(validation_1.validateNationalIdNumber('QAT', '29979261028')).toBe(true);
  });
  test('National Id Number is inValid -> Birth Check Digit => 19979261028', () => {
    expect(validation_1.validateNationalIdNumber('QAT', '19979261028')).toBe(false);
  });
  test('National Id Number is inValid -> Birth Check Digit & Date => 32479261028', () => {
    expect(validation_1.validateNationalIdNumber('QAT', '32479261028')).toBe(false);
  });
  test('National Id Number is inValid -> Birth Country Code => 29911761028', () => {
    expect(validation_1.validateNationalIdNumber('QAT', '29911761028')).toBe(false);
  });
  test('National Id Number is inValid -> Last 5 Digit => 32479200000', () => {
    expect(validation_1.validateNationalIdNumber('QAT', '32479200000')).toBe(false);
  });
});
//# sourceMappingURL=qatar.test.js.map
