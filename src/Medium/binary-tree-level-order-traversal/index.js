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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) {
    return [];
  }

  const output = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    const level = node.level || 0;

    if (output[level] == null) {
      output[level] = [];
    }

    output[level || 0].push(node.val);

    if (node.left) {
      node.left.level = level + 1;
      queue.push(node.left);
    }

    if (node.right) {
      node.right.level = level + 1;
      queue.push(node.right);
    }
  }

  return output;
};
