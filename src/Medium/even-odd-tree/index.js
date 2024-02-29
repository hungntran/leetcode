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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  const queue = [root]
  const map = []

  while (queue.length > 0) {
    const node = queue.shift()
    const level = node.level ?? 0

    if (level % 2 === 0 && node.val % 2 === 0) {
      return false
    }

    if (level % 2 !== 0 && node.val % 2 !== 0) {
      return false
    }

    if (map[level] == null) {
      map[level] = []
    }

    map[level].push(node.val)

    if (node.left) {
      node.left.level = level + 1
      queue.push(node.left)
    }

    if (node.right) {
      node.right.level = level + 1
      queue.push(node.right)
    }
  }

  for (let i = 0; i < map.length; i++) {
    if (i % 2 === 0 && !isSorted(map[i], true)) {
      return false
    }

    if (i % 2 !== 0 && !isSorted(map[i], false)) {
      return false
    }
  }

  return true
}

function isSorted(arr, isIncr) {
  for (let i = 0; i < arr.length; i++) {
    if (isIncr && arr[i] >= arr[i + 1]) {
      return false
    }

    if (!isIncr && arr[i] <= arr[i + 1]) {
      return false
    }
  }

  return true
}
