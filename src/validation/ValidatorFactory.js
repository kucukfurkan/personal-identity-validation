'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const ValidatorTUR_1 = require('./validators/ValidatorTUR');
const ValidatorIND_1 = require('./validators/ValidatorIND');
const ValidatorISR_1 = require('./validators/ValidatorISR');
const ValidatorJOR_1 = require('./validators/ValidatorJOR');
const ValidatorPSE_1 = require('./validators/ValidatorPSE');
const ValidatorQAT_1 = require('./validators/ValidatorQAT');
const ValidatorARE_1 = require('./validators/ValidatorARE');
function getValidatorClass(countryCode) {
  switch (countryCode) {
    case 'IND':
      return new ValidatorIND_1.ValidatorIND();
    case 'ISR':
      return new ValidatorISR_1.ValidatorISR();
    case 'JOR':
      return new ValidatorJOR_1.ValidatorJOR();
    case 'PSE':
      return new ValidatorPSE_1.ValidatorPSE();
    case 'QAT':
      return new ValidatorQAT_1.ValidatorQAT();
    case 'TUR':
      return new ValidatorTUR_1.ValidatorTUR();
    case 'ARE':
      return new ValidatorARE_1.ValidatorARE();
    default:
      throw new Error('This country is not supported!');
  }
}
exports.default = getValidatorClass;
//# sourceMappingURL=ValidatorFactory.js.map
