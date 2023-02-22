import {validateNationalIdNumber} from '../../lib';

describe('Israel Test National Id Number', () => {
  test('National Id Number is Valid => 228423323', () => {
    expect(validateNationalIdNumber('ISR', '228423323')).toBe(true);
  });
  test('National Id Number is inValid => 123456789', () => {
    expect(validateNationalIdNumber('ISR', '123456789')).toBe(false);
  });
});
