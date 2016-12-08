export function checkNum(str) {
  const re = /^[0-9]*$/
  return re.test(str) && !!str
}
