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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  root.level = 0;
  const queue = [root];
  const dp = [];

  while (queue.length > 0) {
    const node = queue.shift();

    if (dp[node.level]) {
      dp[node.level].push(node.val);
    } else {
      dp[node.level] = [node.val];
    }

    if (node.left) {
      node.left.level = node.level + 1;
      queue.push(node.left);
    }

    if (node.right) {
      node.right.level = node.level + 1;
      queue.push(node.right);
    }
  }

  return dp.map((row) => (row.reduce((a, b) => a + b) / row.length).toFixed(5));
};
