import {validateNationalIdNumber} from '../../lib';

describe('Türkiye Test National Id Number', () => {
  test('National Id Number is Valid => 17772082936', () => {
    expect(validateNationalIdNumber('TUR', '17772082936')).toBe(true);
  });
  test('National Id Number is inValid => 17772082932', () => {
    expect(validateNationalIdNumber('TUR', '17772082932')).toBe(false);
  });
});
