export class TreeNode {
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
    if (arr[i] == null) {
      return root;
    }

    root = new TreeNode(arr[i]);

    // insert left child
    root.left = arrayToTree(arr, 2 * i + 1);

    // insert right child
    root.right = arrayToTree(arr, 2 * i + 2);
  }

  return root;
}

/**
 *
 * @param {TreeNode} root
 */
export function treeToArray(root) {
  const res = [];

  const resolve = (root, i = 0) => {
    if (root == null) {
      res[i] = null;
      return;
    }

    if (root.left) resolve(root.left, 2 * i + 1);
    if (root.right) resolve(root.right, 2 * i + 2);

    res[i] = root.val;
  };

  resolve(root);
  return fillSparseArray(res);
}

const fillSparseArray = (array, fillValue = null) => {
  let checkpoint = -1;
  const result = [...array];

  array.forEach((item, index) => {
    if (index > checkpoint + 1) {
      result.splice(
        checkpoint + 1,
        index - checkpoint - 1,
        ...Array(index - checkpoint - 1).fill(fillValue)
      );
    }
    checkpoint = index;
  });

  return result;
};

export class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} source
 * @param {ListNode} target
 * @return {boolean}
 */
export const isLinkedListEqual = (source, target) => {
  while (source != null && target != null) {
    if (source.val !== target.val) {
      return false;
    }

    source = source.next;
    target = target.next;
  }

  return source == null || target == null;
};

/**
 * @param {ListNode} arr
 * @return {ListNode}
 */
export const arrayToLinkedList = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    cur.next = node;
    cur = node;
  }

  return head;
};
