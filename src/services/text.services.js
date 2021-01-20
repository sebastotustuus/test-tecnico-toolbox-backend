exports.textServices = (param) => {
  const reverse = param.split('').reverse().join('')
  return {
    original: param,
    text: reverse,
    palindrome: param === reverse
  }
}
