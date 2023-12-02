/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const map = chars.split('').reduce((prev, c) => {
    if (!prev[c]) {
      prev[c] = 0
    }

    prev[c] += 1

    return prev
  }, {})

  let res = 0

  for (const word of words) {
    if (check(word, Object.create(map))) {
      res += word.length
    }
  }

  return res
}

function check(word, map) {
  for (const char of word) {
    if (map[char]) {
      map[char] -= 1
    } else {
      return false
    }
  }

  return true
}
