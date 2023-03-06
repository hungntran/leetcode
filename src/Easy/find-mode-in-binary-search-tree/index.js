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
export const findMode = function (root) {
  const map = new Map();
  accumulate(root, map);

  let max = -Infinity;
  let res = [];
  for (const [key, value] of map) {
    if (value === max) {
      res.push(key);
    } else if (value > max) {
      max = value;
      res = [key];
    }
  }

  return res;
};

const accumulate = (node, map = new Map()) => {
  if (node == null) {
    return;
  }

  if (node.val !== null) {
    map.set(node.val, (map.get(node.val) || 0) + 1);
  }

  accumulate(node.left, map);
  accumulate(node.right, map);
};
