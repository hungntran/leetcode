/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isSymmetric = function (root) {
  return compare(root, root);
};

const compare = (L, R) => {
  if (L == null && R == null) {
    return true;
  }

  if (L != null && R != null) {
    if (L.val !== R.val) {
      return false;
    }

    return compare(L.left, R.right) && compare(L.right, R.left);
  }

  return false;
};
