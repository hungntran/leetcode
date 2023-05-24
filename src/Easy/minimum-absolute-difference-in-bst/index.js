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
var getMinimumDifference = function (root) {
  const queue = [root];
  const nodes = [];

  while (queue.length > 0) {
    const node = queue.shift();

    nodes.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  nodes.sort((a, b) => a - b);
  let res = Infinity;

  for (let i = 1; i < nodes.length; i++) {
    res = Math.min(res, nodes[i] - nodes[i - 1]);
  }

  return res;
};
