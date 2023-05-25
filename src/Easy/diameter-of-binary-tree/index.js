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
var diameterOfBinaryTree = function (root) {
  const max = [0];
  helper(root, max);
  return max[0];
};

const helper = (node, max) => {
  if (node == null) {
    return 0;
  }

  const leftHeight = helper(node.left, max);
  const rightHeight = helper(node.right, max);

  max[0] = Math.max(max, leftHeight + rightHeight);
  return 1 + Math.max(leftHeight, rightHeight);
};
