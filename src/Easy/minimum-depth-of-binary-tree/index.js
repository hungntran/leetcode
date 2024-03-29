/**
 * @param {TreeNode} root
 * @return {number}
 */
export const minDepth = function (root) {
  if (root == null) {
    return 0;
  }

  if (root.left == null && root.right == null) {
    return 1;
  }

  if (root.left && root.right == null) {
    return 1 + minDepth(root.left);
  }

  if (root.right && root.left == null) {
    return 1 + minDepth(root.right);
  }

  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
