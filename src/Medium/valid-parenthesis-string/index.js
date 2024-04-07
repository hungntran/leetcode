/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  const openStack = []
  const asteriskStack = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char === '(') {
      openStack.push(i)
      continue
    }

    if (char === '*') {
      asteriskStack.push(i)
      continue
    }

    if (char === ')') {
      if (openStack.length > 0) {
        openStack.pop()
        continue
      }

      if (asteriskStack.length > 0) {
        asteriskStack.pop()
        continue
      }

      return false
    }
  }

  while (openStack.length > 0 && asteriskStack.length > 0) {
    if (openStack.pop() > asteriskStack.pop()) {
      return false
    }
  }

  return openStack.length === 0
}
