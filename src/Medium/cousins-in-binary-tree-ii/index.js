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
 * @return {TreeNode}
 */
export const replaceValueInTree = function (root) {
  root.depth = 0;
  const queue = [root];
  const db = [];

  while (queue.length) {
    const node = queue.shift();

    if (node.left) {
      node.left.depth = node.depth + 1;
      node.left.parent = node;
      queue.push(node.left);
    }

    if (node.right) {
      node.right.depth = node.depth + 1;
      node.right.parent = node;
      queue.push(node.right);
    }

    if (db[node.depth]) {
      db[node.depth].push(node);
    } else {
      db[node.depth] = [node];
    }
  }

  for (const row of db) {
    for (const node of row) {
      node.oldVal = node.val;
      node.val = row
        .filter((item) => item !== node && item.parent !== node.parent)
        .reduce((acc, item) => {
          return acc + (item.oldVal || item.val);
        }, 0);
    }
  }

  return root;
};
