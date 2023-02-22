'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const validation_1 = require('../../src/validation');
describe('United Arab Emirates Test National Id Number', () => {
  test('National Id Number is Valid => 784198912345679', () => {
    expect(validation_1.validateNationalIdNumber('UAE', '784198912345679')).toBe(true);
  });
  test('National Id Number is inValid -> Must Start With 784 => 7831989123456798', () => {
    expect(validation_1.validateNationalIdNumber('UAE', '7831989123456798')).toBe(false);
  });
  test('National Id Number is inValid -> Must Start Valid Birth Year => 7832089123456798', () => {
    expect(validation_1.validateNationalIdNumber('UAE', '7832089123456798')).toBe(false);
  });
  test('National Id Number is inValid -> Check Sum Digit => 7841989123456798', () => {
    expect(validation_1.validateNationalIdNumber('UAE', '7841989123456798')).toBe(false);
  });
});
//# sourceMappingURL=united_arabic_emirates.test.js.map
