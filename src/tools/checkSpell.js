export function checkSpell(str) {
  const re = /^[A-Za-z ]+$/
  return re.test(str) && !!str
}
