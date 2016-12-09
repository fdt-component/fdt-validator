"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkSpell;
function checkSpell(str) {
  var re = /^[A-Za-z ]+$/;
  return re.test(str) && !!str;
}