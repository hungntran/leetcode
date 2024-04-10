/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  const n = deck.length
  const result = Array(n).fill(0)
  let deckIndex = 0
  let resultIndex = 0
  let skip = false

  deck.sort((a, b) => a - b)

  while (deckIndex < n) {
    if (result[resultIndex] === 0) {
      if (!skip) {
        result[resultIndex] = deck[deckIndex]
        deckIndex += 1
      }

      skip = !skip
    }

    resultIndex = (resultIndex + 1) % n
  }

  return result
}
