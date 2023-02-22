'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const validation_1 = require('../../src/validation');
describe('Indonesia Test National Id Number', () => {
  test('National Id Number is Valid => 1101010112456789', () => {
    expect(validation_1.validateNationalIdNumber('IND', '1101010112456789')).toBe(true);
  });
  test('National Id Number is inValid -> Province Regin District Code => 0101010123456789', () => {
    expect(validation_1.validateNationalIdNumber('IND', '0101010123456789')).toBe(false);
  });
  test('National Id Number is inValid -> Birth Date => 1101018112996789', () => {
    expect(validation_1.validateNationalIdNumber('IND', '1101018112996789')).toBe(false);
  });
  test('National Id Number is inValid -> Last 4 Digit => 1101010112450000', () => {
    expect(validation_1.validateNationalIdNumber('IND', '1101010112450000')).toBe(false);
  });
});
//# sourceMappingURL=indonesia.test.js.map
