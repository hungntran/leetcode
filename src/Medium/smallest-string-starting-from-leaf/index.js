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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  let min = null

  helper(root, '')

  return min

  function helper(node, str) {
    if (node == null) {
      return
    }

    str = String.fromCharCode(node.val + 'a'.charCodeAt(0)) + str

    if (node.left == null && node.right == null) {
      if (!min || str < min) {
        min = str
      }

      return
    }

    helper(node.left, str)
    helper(node.right, str)
  }
}
