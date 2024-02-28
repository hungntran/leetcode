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
var findBottomLeftValue = function (root) {
  const map = {}
  const queue = [root]
  let maxLevel = 0

  while (queue.length > 0) {
    const node = queue.shift()
    const level = node.level ?? 0

    maxLevel = Math.max(level, maxLevel)

    map[level] = [...(map[level] ?? []), node.val]

    if (node.left) {
      node.left.level = level + 1
      queue.push(node.left)
    }

    if (node.right) {
      node.right.level = level + 1
      queue.push(node.right)
    }
  }

  return map[maxLevel][0]
}
