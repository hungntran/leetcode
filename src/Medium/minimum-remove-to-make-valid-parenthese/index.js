/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const stack = []
  const output = s.split('')

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else if (s[i] === ')') {
      if (stack.length === 0) {
        output[i] = ''
      } else {
        stack.pop()
      }
    }
  }

  for (const i of stack) {
    output[i] = ''
  }

  return output.join('')
}
