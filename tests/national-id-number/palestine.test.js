'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const validation_1 = require('../../src/validation');
describe('Palestine Test National Id Number', () => {
  test('National Id Number is Valid => 228423323', () => {
    expect(validation_1.validateNationalIdNumber('PSE', '228423323')).toBe(true);
  });
  test('National Id Number is inValid => 123456789', () => {
    expect(validation_1.validateNationalIdNumber('PSE', '123456789')).toBe(false);
  });
});
//# sourceMappingURL=palestine.test.js.map
