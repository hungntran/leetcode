/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
  const map = {}

  for (const des of descriptions) {
    const [parent, child, isLeft] = des
    const target = isLeft === 1 ? 'left' : 'right'

    if (!map[child]) {
      map[child] = new TreeNode(child)
    }

    if (!map[parent]) {
      map[parent] = new TreeNode(parent)
    }

    map[parent][target] = map[child]
  }

  descriptions.forEach((a) => {
    delete map[a[1]]
  })

  return Object.values(map).pop()
}
