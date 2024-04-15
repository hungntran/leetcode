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
var sumNumbers = function (root) {
  let sum = 0
  dfs(root, '')
  return sum

  function dfs(node, str) {
    if (node == null) {
      return
    }

    const addSum = str + node.val

    if (node.left == null && node.right == null) {
      sum += Number(addSum)
      return
    }

    dfs(node.left, addSum)
    dfs(node.right, addSum)
  }
}
