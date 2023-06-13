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
var findSecondMinimumValue = function (root) {
  const set = new Set();
  let min = Infinity;
  let ans = -1;

  dfs(root, set);

  if (set.size < 2) {
    return -1;
  }

  return [...set].sort((a, b) => a - b)[1];
};

const dfs = (root, set) => {
  if (root == null) {
    return;
  }

  set.add(root.val);
  dfs(root.left, set);
  dfs(root.right, set);
};
