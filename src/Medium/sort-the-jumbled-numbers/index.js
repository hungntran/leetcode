/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
  const temp = nums.map((num) => {
    const mapNum = parseInt(
      num
        .toString()
        .split('')
        .map((digit) => mapping[digit])
        .join('')
    )
    return {
      num,
      mapNum,
    }
  })

  temp.sort((a, b) => a.mapNum - b.mapNum)
  return temp.map((e) => e.num)
}
