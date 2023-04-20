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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = [];

  const dfs = (node, path = '') => {
    const newPath = `${path}${path ? '->' : ''}${node?.val}`;

    if (node.left == null && node.right == null) {
      res.push(newPath);
      return;
    }

    if (node.left) dfs(node.left, newPath);
    if (node.right) dfs(node.right, newPath);
  };

  dfs(root);
  return res;
};
