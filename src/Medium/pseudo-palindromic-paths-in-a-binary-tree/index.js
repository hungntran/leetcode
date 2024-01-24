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
var pseudoPalindromicPaths = function (root) {
  const set = new Set()
  let res = 0
  handler(root)
  return res

  function handler(node) {
    if (node == null) {
      return
    }

    if (set.has(node.val)) {
      set.delete(node.val)
    } else {
      set.add(node.val)
    }

    if (node.left == null && node.right == null) {
      res += set.size > 1 ? 0 : 1
    }

    handler(node.left)
    handler(node.right)

    if (set.has(node.val)) {
      set.delete(node.val)
    } else {
      set.add(node.val)
    }
  }
}
