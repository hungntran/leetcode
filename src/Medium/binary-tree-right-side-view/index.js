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
var rightSideView = function (root) {
  if (root == null) {
    return [];
  }

  const layer = [];
  const queue = [{ level: 0, node: root }];

  while (queue.length > 0) {
    const { level: lv, node } = queue.shift();

    if (layer[lv] == null) {
      layer[lv] = [];
    }

    layer[lv].push(node.val);

    if (node.left) {
      queue.push({ level: lv + 1, node: node.left });
    }

    if (node.right) {
      queue.push({ level: lv + 1, node: node.right });
    }
  }

  return layer.map((row) => row.at(-1));
};
