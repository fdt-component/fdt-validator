import checkNum from './tools/checkNum';
import checkEmail from './tools/checkEmail';
import checkEmpty from './tools/checkEmpty';
import checkIDCard from './tools/checkIDCard';
import checkSpell from './tools/checkSpell';
import checkMobile from './tools/checkMobile';

const validator = {
  checkNum,
  checkEmail,
  checkEmpty,
  checkIDCard,
  checkSpell,
  checkMobile
}
module.exports = validator
