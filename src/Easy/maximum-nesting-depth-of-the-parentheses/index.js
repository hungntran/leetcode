/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  const stack = []
  let output = 0

  for (const char of s) {
    if (char === '(') {
      stack.push(char)
      output = Math.max(output, stack.length)
    } else if (char === ')') {
      stack.pop()
    }
  }

  return output
}
