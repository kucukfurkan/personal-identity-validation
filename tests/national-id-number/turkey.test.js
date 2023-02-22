'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const validation_1 = require('../../src/validation');
describe('Türkiye Test National Id Number', () => {
  test('National Id Number is Valid => 17772082936', () => {
    expect(validation_1.validateNationalIdNumber('TUR', '17772082936')).toBe(true);
  });
  test('National Id Number is inValid => 17772082932', () => {
    expect(validation_1.validateNationalIdNumber('TUR', '17772082932')).toBe(false);
  });
});
//# sourceMappingURL=turkey.test.js.map
