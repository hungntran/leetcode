/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const output = helper(i, j, word)

      if (output) {
        return true
      }
    }
  }

  return false

  function helper(i, j, word) {
    if (board[i]?.[j] == null) {
      return false
    }

    if (board[i]?.[j] !== word[0]) {
      return false
    }

    if (word.length === 1) {
      return true
    }

    board[i][j] = null
    const target = word.slice(1)
    let output =
      helper(i - 1, j, target) ||
      helper(i, j - 1, target) ||
      helper(i, j + 1, target) ||
      helper(i + 1, j, target)
    board[i][j] = word[0]

    return output
  }
}
