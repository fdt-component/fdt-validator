export function checkMobile(str) {
  const re = /^1[34578]\d{9}$/
  return re.test(str)
}
