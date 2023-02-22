import {validateNationalIdNumber} from '../../lib';

describe('Jordan Test National Id Number', () => {
  test('National Id Number is Valid => 2880223721', () => {
    expect(validateNationalIdNumber('JOR', '2880223721')).toBe(true);
  });
  test('National Id Number is inValid => 5880223721', () => {
    expect(validateNationalIdNumber('JOR', '5880223721')).toBe(false);
  });
});
