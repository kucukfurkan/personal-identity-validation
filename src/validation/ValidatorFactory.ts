import BaseValidator from './validators/BaseValidator';

import {ValidatorTUR} from './validators/ValidatorTUR';
import {ValidatorIND} from './validators/ValidatorIND';
import {ValidatorISR} from './validators/ValidatorISR';
import {ValidatorJOR} from './validators/ValidatorJOR';
import {ValidatorPSE} from './validators/ValidatorPSE';
import {ValidatorQAT} from './validators/ValidatorQAT';
import {ValidatorARE} from './validators/ValidatorARE';

export default function getValidatorClass(countryCode: string): BaseValidator {
  switch (countryCode) {
    case 'IND':
      return new ValidatorIND();
    case 'ISR':
      return new ValidatorISR();
    case 'JOR':
      return new ValidatorJOR();
    case 'PSE':
      return new ValidatorPSE();
    case 'QAT':
      return new ValidatorQAT();
    case 'TUR':
      return new ValidatorTUR();
    case 'ARE':
      return new ValidatorARE();
    default:
      throw new Error('This country is not supported!');
  }
}
