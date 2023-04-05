/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root, res = []) {
  if (root == null) {
    return res;
  }

  inorderTraversal(root.left, res);
  res.push(root.val);
  inorderTraversal(root.right, res);

  return res;
};
