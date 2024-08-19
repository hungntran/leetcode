/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const chars = word.split('')
  const freq = {}
  chars.forEach((e) => {
    freq[e] = (freq[e] || 0) + 1
  })
  const pads = buildPad(freq)
  let output = 0
  for (const char of chars) {
    output += pads[char]
  }
  return output
}

function buildPad(freq) {
  const arr = Object.entries(freq).sort((a, b) => {
    return a[1] - b[1]
  })
  const pads = {}
  let ite = 1
  let count = 1
  while (arr.length > 0) {
    const [char] = arr.pop()
    pads[char] = ite
    count += 1
    if (count > 8) {
      ite += 1
      count = 1
    }
  }
  return pads
}
