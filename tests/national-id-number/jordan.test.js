'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const validation_1 = require('../../src/validation');
describe('Jordan Test National Id Number', () => {
  test('National Id Number is Valid => 123456789', () => {
    expect(validation_1.validateNationalIdNumber('JOR', '228423323')).toBe(true);
  });
  test('National Id Number is inValid => 123456789012', () => {
    expect(validation_1.validateNationalIdNumber('JOR', '123456789123')).toBe(false);
  });
});
//# sourceMappingURL=jordan.test.js.map
