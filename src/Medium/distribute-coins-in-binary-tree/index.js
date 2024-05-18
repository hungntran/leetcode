/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function (root) {
  let moves = 0
  helper(root)
  return moves

  function helper(node) {
    if (node == null) return [0, 0]

    const [lSize, lCoins] = helper(node.left)
    const [rSize, rCoins] = helper(node.right)

    let size = 1 + lSize + rSize
    let coins = node.val + lCoins + rCoins

    moves += Math.abs(size - coins)
    return [size, coins]
  }
}
