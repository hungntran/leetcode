/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const res = [];
  return helper(root, res);
};

const helper = (root, res) => {
  if (root == null) {
    return res;
  }

  res.push(root.val);

  for (const node of root.children) {
    helper(node, res);
  }

  return res;
};
