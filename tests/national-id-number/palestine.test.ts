import {validateNationalIdNumber} from '../../lib';

describe('Palestine Test National Id Number', () => {
  test('National Id Number is Valid => 228423323', () => {
    expect(validateNationalIdNumber('PSE', '228423323')).toBe(true);
  });
  test('National Id Number is inValid => 123456789', () => {
    expect(validateNationalIdNumber('PSE', '123456789')).toBe(false);
  });
});
