export function checkIDCard(str) {
  const city={ 11: 'bj', 12: 'tj', 13: 'hb', 14: 'sx', 15: 'nm', 21: 'ln',
    22: 'jl', 23: 'hlj', 31: 'sh', 32: 'js', 33: 'zj', 34: 'ah', 35:'fj',
    36: 'jx', 37: 'sd', 41: 'hn', 42: 'hb', 43: 'hn', 44: 'gd', 45: 'gx',
    46: 'hn', 50: 'cq', 51: 'sc', 52: 'gz', 53: 'yn', 54: 'xz', 61: 'sx',
    62: 'gs', 63: 'qh', 64: 'nx', 65: 'xj', 71: 'tw', 81: 'hk', 82: 'au',
    91: 'gw',
  }
  const reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  let code = str;
  if(typeof str === 'string') {
    code = str.toUpperCase();
  }
  if(!code || !reg.test(code)) {
    return false;
  } else if (!city[code.substr(0,2)]) {
    return false;
  } else if (code.length === 18) {
      // 18位身份证需要验证最后一位校验位
      const codeItems = code.split('')
      // ∑(ai×Wi)(mod 11)
      // 加权因子
      const factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]
      //校验位
      const parity = [ '1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2' ]
      let sum = 0
      let ai = 0
      let wi = 0
      for (let i = 0; i < 17; i++) {
          ai = codeItems[i]
          wi = factor[i]
          sum += ai * wi
      }
      if(parity[sum % 11] !== codeItems[17]){
          // "校验位错误"
          return false
      }
    }
  return true
}
