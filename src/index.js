import {checkNum} from './tools/checkNum.js';
import {checkEmail} from './tools/checkEmail.js';
import {checkEmpty} from './tools/checkEmpty.js';
import {checkIDCard} from './tools/checkIDCard.js';
import {checkSpell} from './tools/checkSpell.js';
import {checkMobile} from './tools/checkMobile.js';

const validator = {
  checkNum : checkNum,
  checkEmail : checkEmail,
  checkEmpty : checkEmpty,
  checkIDCard : checkIDCard,
  checkSpell : checkSpell,
  checkMobile : checkMobile
};


module.exports = validator;
