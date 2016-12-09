"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkMobile;
function checkMobile(str) {
  var re = /^1[34578]\d{9}$/;
  return re.test(str);
}