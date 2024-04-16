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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth === 1) {
    return new TreeNode(val, root)
  }
  helper(root, 1)
  return root

  function helper(node, d) {
    if (node == null) {
      return
    }

    if (d === depth - 1) {
      const left = new TreeNode(val, node.left)
      const right = new TreeNode(val, undefined, node.right)

      node.left = left
      node.right = right
      return
    }

    helper(node.left, d + 1)
    helper(node.right, d + 1)
  }
}
