/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) return false

  for (const c of word2) {
      if (!word1.includes(c)) {
          return false
      }
  }

  const m1 = {}
  const m2 = {}

  for (const c of word1) {
      m1[c] = m1[c] ? m1[c] + 1 : 1
  }

  for (const c of word2) {
      if (!m1[c]) return false

      m2[c] = m2[c] ? m2[c] + 1 : 1
  }

  return Object.values(m1).sort().join(',') === Object.values(m2).sort().join(',')
};