"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkNum;
function checkNum(str) {
  var re = /^[0-9]*$/;
  return re.test(str) && !!str;
}