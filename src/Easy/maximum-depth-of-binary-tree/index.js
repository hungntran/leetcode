/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maxDepth = function (root) {
  if (root == null) {
    return 0;
  }

  if (root.left == null && root.right == null) {
    return 1;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
