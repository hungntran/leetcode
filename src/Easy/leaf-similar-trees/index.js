/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
export const leafSimilar = function (root1, root2) {
  const value1 = getLeafSequence(root1);
  const value2 = getLeafSequence(root2);

  return value1.join(',') === value2.join(',');
};

const getLeafSequence = (root, res = []) => {
  if (root.left == null && root.right == null) {
    res.push(root.val);
  }

  if (root.left) getLeafSequence(root.left, res);
  if (root.right) getLeafSequence(root.right, res);

  return res;
};
