/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  helper(nums, [], result);
  return result;
};

const helper = (rest, acc, result) => {
  if (rest.length === 0) {
    result.push([...acc]);
    return;
  }

  for (let i = 0; i < rest.length; i++) {
    const temp = acc.concat(rest[i]);
    const filtered = [...rest];
    filtered.splice(i, 1);
    helper(filtered, temp, result);
  }
};

console.log(permute([1, 2, 3]));
