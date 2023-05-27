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
var findTilt = function (root) {
  let res = 0;

  const helper = (node) => {
    if (node == null) {
      return 0;
    }

    const leftSum = helper(node.left);
    const rightSum = helper(node.right);
    const tilt = Math.abs(leftSum - rightSum);
    res += tilt;

    return node.val + leftSum + rightSum;
  };

  helper(root);
  return res;
};
