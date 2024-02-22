/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
  const n = nums.length
  const cache = {}

  const resA = helper(nums.slice(2), nums[0] + nums[1])
  const resB = helper(nums.slice(0, n - 2), nums.at(-1) + nums.at(-2))
  const resC = helper(nums.slice(1, n - 1), nums[0] + nums.at(-1))

  return 1 + Math.max(resA, resB, resC)

  function helper(arr, target) {
    if (arr.length < 2) {
      return 0
    }

    if (arr.length === 2) {
      return arr[0] + arr[1] === target ? 1 : 0
    }

    const key = `${arr.join('_')}#${target}`

    if (cache[key]) {
      return cache[key]
    }

    const sumA = arr[0] + arr[1]
    const sumB = arr.at(-1) + arr.at(-2)
    const sumC = arr[0] + arr.at(-1)

    let res = 0

    if (sumA === target) {
      res = Math.max(res, 1 + helper(arr.slice(2), target))
    }

    if (sumB === target) {
      res = Math.max(res, 1 + helper(arr.slice(0, arr.length - 2), target))
    }

    if (sumC === target) {
      res = Math.max(res, 1 + helper(arr.slice(1, arr.length - 1), target))
    }
    cache[key] = res
    return cache[key]
  }
}
