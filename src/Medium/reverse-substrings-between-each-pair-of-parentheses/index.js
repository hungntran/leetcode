/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  let stack = ['']

  for (const c of s) {
    if (c === '(') {
      stack.push('')
    } else if (c === ')') {
      const match = stack.pop().split('').reverse().join('')
      stack[stack.length - 1] += match
    } else {
      stack[stack.length - 1] += c
    }
  }

  return stack.pop()
}
