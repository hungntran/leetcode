class TreeNode {
  constructor(val, left, right) {
    this.val = val === null ? null : val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

/**
 *
 * @param {number[]} arr
 * @param {number} i
 */
export function arrayToTree(arr, i = 0) {
  let root = null;
  // Base case for recursion
  if (i < arr.length) {
    root = new TreeNode(arr[i]);

    // insert left child
    root.left = arrayToTree(arr, 2 * i + 1);

    // insert right child
    root.right = arrayToTree(arr, 2 * i + 2);
  }

  return root;
}
