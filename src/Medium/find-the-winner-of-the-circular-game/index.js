/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  const friends = new Array(n).fill(0).map((e, i) => i + 1)

  let i = 0

  while (friends.length > 1) {
    i = ((i + k) % friends.length) - 1
    if (i < 0) i = friends.length - 1
    friends.splice(i, 1)
  }

  return friends[0]
}
