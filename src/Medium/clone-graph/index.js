/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const cloned = {};
  clone(node);
  return cloned[1];

  function clone(node) {
    if (node == null) return null;
    if (cloned[node.val]) return cloned[node.val];

    const newNode = new Node(node.val);
    cloned[node.val] = newNode;

    for (const n of node.neighbors) {
      newNode.neighbors.push(clone(n));
    }

    return newNode;
  }
};
