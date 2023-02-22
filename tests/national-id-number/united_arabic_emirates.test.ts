import {validateNationalIdNumber} from '../../lib';

describe('United Arab Emirates Test National Id Number', () => {
  test('National Id Number is Valid => 784198912345679', () => {
    expect(validateNationalIdNumber('ARE', '784198912345679')).toBe(true);
  });

  test('National Id Number is inValid -> Must Start With 784 => 7831989123456798', () => {
    expect(validateNationalIdNumber('ARE', '7831989123456798')).toBe(false);
  });

  test('National Id Number is inValid -> Must Start Valid Birth Year => 7832089123456798', () => {
    expect(validateNationalIdNumber('ARE', '7832089123456798')).toBe(false);
  });

  test('National Id Number is inValid -> Check Sum Digit => 7841989123456798', () => {
    expect(validateNationalIdNumber('ARE', '7841989123456798')).toBe(false);
  });
});
