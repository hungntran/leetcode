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
var maxAncestorDiff = function (root) {
  return helper(root);

  function helper(node, min, max) {
    min = Math.min(node.val, min ?? Infinity);
    max = Math.max(node.val, max ?? -Infinity);

    const left = node.left ? helper(node.left, min, max) : 0;
    const right = node.right ? helper(node.right, min, max) : 0;

    return Math.max(max - min, left, right);
  }
};
