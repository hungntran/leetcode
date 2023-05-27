/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root == null) {
    return 0;
  }

  const dfs = root.children.map((node) => maxDepth(node));
  return 1 + Math.max(0, ...dfs);
};
