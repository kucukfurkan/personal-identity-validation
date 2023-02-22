'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const validation_1 = require('../../src/validation');
describe('Israel Test National Id Number', () => {
  test('National Id Number is Valid => 228423323', () => {
    expect(validation_1.validateNationalIdNumber('ISR', '228423323')).toBe(true);
  });
  test('National Id Number is inValid => 123456789', () => {
    expect(validation_1.validateNationalIdNumber('ISR', '123456789')).toBe(false);
  });
});
//# sourceMappingURL=israel.test.js.map
