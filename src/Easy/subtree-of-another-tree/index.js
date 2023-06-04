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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (root == null) {
    return false;
  }

  if (helper(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root?.right, subRoot);
};

const helper = (t, s) => {
  if (t == null || s == null) {
    return t == null && s == null;
  }

  return t.val === s.val && helper(t.left, s.left) && helper(t.right, s.right);
};
