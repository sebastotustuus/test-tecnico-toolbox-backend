exports.textServices = (param) => {
  const paramReplaced = param.toLowerCase().replace(/[\W_]/g, '')
  const reverse = paramReplaced.split('').reverse().join('')
  return {
    original: param,
    text: reverse,
    palindrome: paramReplaced === reverse
  }
}
