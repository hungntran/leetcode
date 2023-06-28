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
var minDiffInBST = function (root) {
  const arr = [];

  const inorderTraverse = (root) => {
    if (root == null) {
      return;
    }

    inorderTraverse(root.left);
    arr.push(root.val);
    inorderTraverse(root.right);
  };

  inorderTraverse(root);

  let min = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] < min) {
      min = arr[i + 1] - arr[i];
    }
  }

  return min;
};
