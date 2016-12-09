'use strict';

var _checkNum = require('./tools/checkNum');

var _checkNum2 = _interopRequireDefault(_checkNum);

var _checkEmail = require('./tools/checkEmail');

var _checkEmail2 = _interopRequireDefault(_checkEmail);

var _checkEmpty = require('./tools/checkEmpty');

var _checkEmpty2 = _interopRequireDefault(_checkEmpty);

var _checkIDCard = require('./tools/checkIDCard');

var _checkIDCard2 = _interopRequireDefault(_checkIDCard);

var _checkSpell = require('./tools/checkSpell');

var _checkSpell2 = _interopRequireDefault(_checkSpell);

var _checkMobile = require('./tools/checkMobile');

var _checkMobile2 = _interopRequireDefault(_checkMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validator = {
  checkNum: _checkNum2.default,
  checkEmail: _checkEmail2.default,
  checkEmpty: _checkEmpty2.default,
  checkIDCard: _checkIDCard2.default,
  checkSpell: _checkSpell2.default,
  checkMobile: _checkMobile2.default
};
module.exports = validator;