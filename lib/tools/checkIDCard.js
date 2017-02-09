"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkIDCard;
function checkIDCard(str) {
  var re = /^[a-zA-Z0-9]+$/;
  return re.test(str) && !!str;
}