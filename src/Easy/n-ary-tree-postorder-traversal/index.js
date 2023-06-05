/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const res = [];

  const dfs = (root) => {
    if (root == null) {
      return;
    }

    for (const node of root.children) {
      dfs(node);
    }

    res.push(root.val);
  };

  dfs(root);

  return res;
};
